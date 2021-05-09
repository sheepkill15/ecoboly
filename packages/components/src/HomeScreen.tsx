import React, {useEffect, useState, useRef} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import store from './firebase/datastore';
import {HomeScreenNavigationProp, Post} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from 'react-native-themed-styles';
import {Theme} from './settings/styles';
import SettingsStore from './settings/SettingsStore';
import {getDatabase} from './firebase/firebase';
import AdBanner from './loaders/ads';

type Props = {
    navigation: HomeScreenNavigationProp;
};
const HomeScreen = (/*{navigation}: Props */) => {
    const code = store.useStoreState((state) => state.userCode);
    const retrieveCode = store.useStoreActions((actions) => actions.setCode);

    const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);

    const [styles] = useTheme(Theme, currTheme);

    const [question, setQuestion] = useState({q: 'Betöltés...', id: -1});
    const [alreadyQ, setAlreadyQ] = useState(false);

    const logout = async () => {
        await AsyncStorage.setItem('@user_code', '').catch((e) => console.log(e));
        retrieveCode('');
    };

    useEffect(() => {
        const fetchLastQuestion = async () => {
            const values: Post[] = (
                await getDatabase().ref('/posts/').once('value')
            ).val();
            const savedId = await AsyncStorage.getItem('@last_question').catch((e) =>
                console.log(e),
            );
            if (!savedId || parseInt(savedId, 10) !== values.length - 1) {
                console.log('fail')
            } else {
                setAlreadyQ(true);
            }
            setQuestion({
                q: values[values.length - 1].kerdes,
                id: values.length - 1,
            });
        };
        fetchLastQuestion();
        console.log('Fetch questions!');
    }, []);

    const handleYes = () => {
        saveWas();
        console.log('Fetch yes!');
        const ref = getDatabase().ref(`/posts/${question.id}/valaszIgen`);
        return ref.transaction((current: number | undefined) => {
            if (!current) {
                return 1;
            }
            return current + 1;
        });
    };
    const handleNo = () => {
        saveWas();
        console.log('Fetch no!');
        const ref = getDatabase().ref(`/posts/${question.id}/valaszNem`);
        return ref.transaction((current: number | undefined) => {
            if (!current) {
                return 1;
            }
            return current + 1;
        });
    };

    const saveWas = () => {
        AsyncStorage.setItem('@last_question', question.id.toString());
        setAlreadyQ(true);
    };


    return (
        <ScrollView>
            <View style={styles.itemList}>
                <Text style={styles.largeText}>Üdvözlet!</Text>
                <Text style={styles.smallText}>A kódod: {code}</Text>
                {/* <Text style={styles.smallText}>
          Ha ki szeretnél lépni, nyomd meg az alábbi gombot:
				</Text>
				<TouchableOpacity style={styles.button} onPress={logout}>
					<Text style={styles.mediumText}>Kilépés</Text>
				</TouchableOpacity> */}
            </View>
            <View style={styles.itemList}>
                <Text style={styles.largeText}>Legutolsó kérdés</Text>
                <Text style={styles.mediumText}>{question.q}</Text>
                {!alreadyQ ? (
                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.button} onPress={handleYes}>
                            <Text style={styles.mediumText}>Igen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleNo}>
                            <Text style={styles.mediumText}>Nem</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <Text style={styles.smallText}>Erre a kérdésre már szavaztál!</Text>
                )}
            </View>

            <View style={styles.itemList}>
                <Text style={styles.largeText}>Posztok</Text>

            </View>
            <View style={{alignItems: 'center'}}>
                <AdBanner />
             </View>

        </ScrollView>
    );
};
export default HomeScreen;
