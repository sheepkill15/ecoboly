import React, {useEffect, useState} from 'react';
import {Switch, View, Text, TouchableOpacity, Alert} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import SettingsStore from './settings/SettingsStore';
import {Theme} from './settings/styles';
import {SettingsScreenNavigationProp} from './types';

import DataStore from './firebase/datastore';

type Props = {
  navigation: SettingsScreenNavigationProp;
};

const SettingsScreen = (/*{navigation}: Props */) => {
	const setTheme = SettingsStore.useStoreActions(
		(actions) => actions.setSelectedTheme,
	);
	const setTopNavigation = SettingsStore.useStoreActions((actions) => actions.setTopNavigation);
	const [isEnabled, setIsEnabled] = useState(false);
	const [isOnTop, setIsOnTop] = useState(true);
	const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);
	const currTopNavigation = SettingsStore.useStoreState((state) => state.topNavigation);
	const [styles] = useTheme(Theme, currTheme);

	const setUserCode = DataStore.useStoreActions((actions) => actions.setCode);

	useEffect(() => {
		if (currTheme === 'dark') {
			setIsEnabled(true);
		} else {
			setIsEnabled(false);
		}
	}, [currTheme]);

	useEffect(() => {
		setIsOnTop(currTopNavigation);
	}, [currTopNavigation]);

	const handleSwitchTheme = (value?: boolean | undefined) => {
		if(typeof value === 'boolean') {
			setTheme(value ? 'dark' : 'light');
		}
	};
	const handleSwitchOnTop = (value?: boolean | undefined) => {
		if(typeof value === 'boolean') {
			setTopNavigation(value);
		}
	}

	const logout = () => setUserCode('');

	return (
		<View style={styles.settingsItem}>
			<View style={styles.divider}>
				<Text style={styles.mediumText}>Sötét téma használata</Text>
				<Switch value={isEnabled} onValueChange={handleSwitchTheme} />
			</View>
			<View style={styles.divider}>
				<Text style={styles.mediumText}>Fenti navigáció</Text>
				<Switch value={isOnTop} onValueChange={handleSwitchOnTop} />
			</View>
			<View style={styles.divider}>
				<TouchableOpacity style={styles.button} onPress={logout}>
					<Text style={styles.mediumText}>Kijelentkezés</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default SettingsScreen;
