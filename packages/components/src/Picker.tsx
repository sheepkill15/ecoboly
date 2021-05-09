// @ts-nocheck

import React, {useState, useEffect} from 'react';
import DropdownPicker from 'react-native-dropdown-picker';
import {View, ViewStyle} from "react-native";
import SettingsStore from './settings/SettingsStore';
import { useTheme } from 'react-native-themed-styles';
import { Theme } from './settings/styles';

const Picker = ({items, onValueChanged, style}: {items: Array<string>; onValueChanged: (value: string) => void; style: ViewStyle}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(items[0]);
    const [ownItems, setItems] = useState(items.map((item) => {
        return {label: item, value: item}
    }));

    const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);

    const [styles, theme] = useTheme(Theme, currTheme);

    useEffect(() => {
        onValueChanged(value);
    }, [value]);

    return <View style={{flex: 1}}><DropdownPicker style={{backgroundColor: theme.accentColor}} showTickIcon={false} theme={currTheme.toUpperCase()} searchable={false} open={open} value={value} items={ownItems} setValue={setValue} setItems={setItems} setOpen={setOpen} /></View>
}

export default Picker;