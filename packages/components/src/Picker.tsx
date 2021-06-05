import React, {useState} from 'react';
import {View, Picker} from "react-native";
import SettingsStore from './settings/SettingsStore';
import { useTheme } from 'react-native-themed-styles';
import { Theme } from './settings/styles';

const MyPicker = ({items, onValueChanged, defaultItem}: {items: Array<string>; onValueChanged: (value: string) => void; defaultItem?: string | undefined}) => {
    const [value, setValue] = useState(defaultItem ?? items[0]);

    const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);

    const [styles, theme] = useTheme(Theme, currTheme);

    const handleValueChange = (itemValue: string, itemIndex: number) => {
        setValue(itemValue);
        onValueChanged(itemValue);
    }

    return <View style={{flex: 1}}>
        <Picker style={{padding: 4, backgroundColor: theme.backgroundColor, color: theme.textColor, fontSize: 16}} selectedValue={value} onValueChange={handleValueChange}>
            {items.map((item) => (
                <Picker.Item key={item} label={item} value={item}/>
            ))}
        </Picker>
    </View>
}

export default MyPicker;