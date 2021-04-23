import React, { useState } from 'react';
import { useTheme } from 'react-native-themed-styles';
import { Text, TouchableOpacity, Modal, View, TextInput, Image } from 'react-native';

import { Theme } from './settings/styles';
import SettingsStore from './settings/SettingsStore';
import { Picker } from '@react-native-picker/picker';

import EditOutline from './res/edit-outline';
import AddOutline from './res/add-outline';

import DataStore from './firebase/datastore';
import {CodeRegExTeacher} from './constants';

const Icons: {[id: string]: any} = {
    Add: AddOutline,
    Edit: EditOutline
}

const Edit = ({variant, data, onSave }: { variant: 'Add' | 'Edit', data: { [id: string]: any }; onSave: (data: { [id: string]: any }) => void }) => {

    const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);
    const currCode = DataStore.useStoreState((state) => state.userCode);
    const [styles, theme] = useTheme(Theme, currTheme);
    const [editModalVisible, setEditVisible] = useState(false);

    const [newData, setNewData] = useState(data);
    const updateData = (text: any, name: string) => {
        if(variant === 'Add') {

            if(name === 'ref-type') {
                switch(text) {
                    case 'Könyv': {
                        setNewData({'Név': '', 'Link': '', 'Méret': '', 'Első': '', 'Második': '', ref: {db: newData['ref'].db, type: text}});
                        break;
                    }
                    default: {
                        setNewData({'Név': '', 'Link': '', ref: {db: newData['ref'].db, type: text}});
                        break;
                    }
                }
                return;
            }
        }
        setNewData({ ...newData, [name]: text });
    }

    return ( currCode.match(CodeRegExTeacher) ?
        <>
            <TouchableOpacity onPress={() => setEditVisible(true)} style={styles.editButton}>
                {variant ? Icons[variant]({width: 32, fill: theme.activeText, stroke: theme.textColor}) : ''}
            </TouchableOpacity>

            <Modal animationType="slide"
                transparent={true}
                visible={editModalVisible}
                onDismiss={() => { setEditVisible(false) }}
                onRequestClose={(() => { setEditVisible(false) })} >
                <View style={styles.itemList}>
                    <Text style={styles.mediumText}>{variant === 'Add' ? 'Hozzáadás' : 'Módosítás'}</Text>
                    {variant === 'Add' ? <View style={styles.subjectDescription} key={100}>
                            <Text style={styles.mediumText}>Típus</Text>
                                <Picker onValueChange={(value) => updateData(value, 'ref-type')} style={styles.textInput}>
                                    {['Könyv', 'Teszt', 'Extra', 'Érettségi'].map((dat: string, i: number) => <Picker.Item value={dat} label={dat} key={dat} />)}
                                </Picker>
                        </View> : <></>}
                    {Object.keys(newData).map((key, i) => {
                        if (key === 'ref') return <View key={i}></View>;
                        if (typeof newData[key] === 'object' && 'current' in newData[key]) {
                            return <View style={styles.subjectDescription} key={i}>
                                <Text style={styles.mediumText}>{key}</Text>
                                <Picker onValueChange={(value) => updateData({ current: value, array: newData[key].array }, key)} style={styles.textInput} selectedValue={newData[key].current}>
                                    {newData[key].array.map((dat: string, i: number) => <Picker.Item value={dat} label={dat} key={dat} />)}
                                </Picker>
                            </View>
                        }
                        return <View style={styles.subjectDescription} key={i}>
                            <Text style={styles.mediumText}>{key}</Text>
                            <TextInput onChangeText={(text) => updateData(text, key)} value={newData[key]} style={styles.textInput} />
                        </View>
                    })}
                    <View style={styles.divider}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => { onSave(newData); setEditVisible(false); }}>
                            <Text style={styles.mediumText}>Mentés</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => setEditVisible(false)}>
                            <Text style={styles.mediumText}>Bezárás</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </> : <></>
    )
}
export default Edit;