import store from './firebase/datastore';
import {getDatabase} from './firebase/firebase';
import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from 'react-native-themed-styles';
import { BookScreenNavigationProp, Subject } from './types';

import { createStackNavigator } from '@react-navigation/stack';
import TreeScreen from './TreeScreen';
import WebScreen from './WebScreen';
import { Theme } from './settings/styles';
import SettingsStore from './settings/SettingsStore';

import fizika from './res/fizika.jpeg';
import vallalkozas from './res/vallalkozastan.png';
import gazdasagtan from './res/gazdasagtan.png';

import Image from './loaders/image';
import Edit from './Edit';
import ResponsiveList from './ResponsiveList';

type Props = {
	navigation: BookScreenNavigationProp;
};

const images: { [id: string]: any } = {
	vallalkozas: vallalkozas,
	gazdasagtan: gazdasagtan,
	physics: fizika
};

const classes = ['Összes', 'IX. osztály', 'X. osztály', 'XI. osztály', 'XII. osztály'];
const tantargyak = ['Összes', 'Vállalkozástan', 'Gazdaságtan', 'Fizika'];

const BookStack = createStackNavigator();

const BookScreen = () => {
	return (
		<BookStack.Navigator screenOptions={{ headerShown: false }}>
			<BookStack.Screen name="Könyvek" component={SubjectScreen} />
			<BookStack.Screen name="Tree" component={TreeScreen} />
			<BookStack.Screen name="Web" component={WebScreen} />
		</BookStack.Navigator>
	);
};

const SubjectScreen = ({ navigation }: Props) => {
	const subjects = store.useStoreState((state) => state.subjects);
	const setSubjects = store.useStoreActions((actions) => actions.addSubjects);

	const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);

	const [styles] = useTheme(Theme, currTheme);

	const [selTantargy, setSelTantargy] = useState(tantargyak[0]);
	const [selOsztaly, setSelOsztaly] = useState(classes[0]);

	const handlePress = (subject: string) => {
		navigation.navigate('Tree', subject);
	};

	const handleEdit = async (data: {[id: string]: any}) => {
		const newSubjects = subjects;
		newSubjects[data.ref.index] = subjects[data.ref.index];
		newSubjects[data.ref.index].nev = data['Név'] ?? '';
		newSubjects[data.ref.index].leiras = data['Leírás'] ?? '';
		newSubjects[data.ref.index].osztaly = data['Osztály'].current;
		newSubjects[data.ref.index].tantargy = data['Tantárgy'].current;
		getDatabase().ref(data.ref.db).update(newSubjects[data.ref.index]);
		setSubjects([...newSubjects]);
	}

	const subjectItem = ({ item }: { item: Subject }) => (
		<View
			>
			<TouchableOpacity onPress={() => handlePress(item.nev)} style={styles.subjectItem}>
				<Image imageStyle={styles.image} source={images[item.kep]} />
				<View style={styles.subjectContent}>
					<Text style={styles.subjectTitle}>{item.nev}</Text>
					<View style={styles.subjectDescription}>
						<Text style={styles.smallText}>Osztály: {item.osztaly}</Text>
						<Text style={styles.smallText}>Tantárgy: {item.tantargy}</Text>
					</View>
					<Text style={styles.smallText}>{item.leiras}</Text>
				</View>
			</TouchableOpacity>
			<Edit variant={'Edit'} data={
				{ 
					'Név': item.nev ,
					'Osztály': {
						current: item.osztaly,
						array: classes
					},
					'Tantárgy': {
						current: item.tantargy,
						array: tantargyak,
					},
					'Leírás': item.leiras,
					ref: {
						db: `/Tantargy/${subjects.indexOf(item) + 1}`,
						index: subjects.indexOf(item),
					}
			}
				} onSave={handleEdit} />
		</View>
	);
	return (
		<>
			<View style={styles.buttonBox}>
				<Picker style={styles.textInput} onValueChange={(value: string) => setSelOsztaly(value)}>
					{classes.map((value, id) => <Picker.Item label={value} value={value} key={id} />)}
				</Picker>
				<Picker style={styles.textInput} onValueChange={(value: string) => setSelTantargy(value)}>
					{tantargyak.map((value, id) => <Picker.Item label={value} value={value} key={id} />)}
				</Picker>
			</View>
			<ResponsiveList
				data={subjects.filter(x => (
					x.tantargy === selTantargy || selTantargy === tantargyak[0]) &&
					(x.osztaly === selOsztaly || selOsztaly === classes[0]))}
				renderItem={subjectItem}
				keyExtractor={(item: Subject) => item.nev}
			/>
		</>
	);
};

export default BookScreen;
