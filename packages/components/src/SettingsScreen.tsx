import React, {useEffect, useState} from 'react';
import {Switch, View, Text, TouchableOpacity, Alert} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
// import RNFetchBlob from 'rn-fetch-blob';
import SettingsStore from './settings/SettingsStore';
import {Theme} from './settings/styles';
import {SettingsScreenNavigationProp} from './types';

type Props = {
  navigation: SettingsScreenNavigationProp;
};

const SettingsScreen = (/*{navigation}: Props */) => {
	const setTheme = SettingsStore.useStoreActions(
		(actions) => actions.setSelectedTheme,
	);
	const setExternalReader = SettingsStore.useStoreActions(
		(actions) => actions.setExternalReader,
	);
	const [isEnabled, setIsEnabled] = useState(false);
	const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);
	const externalReader = SettingsStore.useStoreState(
		(state) => state.externalReader,
	);
	const [styles] = useTheme(Theme, currTheme);

	const [pdfs, setPdfs] = useState(0);
	const [isExternal, setIsExternal] = useState(false);

	useEffect(() => {
		if (currTheme === 'dark') {
			setIsEnabled(true);
		} else {
			setIsEnabled(false);
		}
	}, [currTheme]);

	// useEffect(() => {
	// 	const fetchNumber = async () => {
	// 		const files = await RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.DocumentDir);
	// 		let sum = 0;
	// 		for (let i = 0; i < files.length; i++) {
	// 			if (files[i].endsWith('.pdf')) {
	// 				sum++;
	// 			}
	// 		}
	// 		setPdfs(sum);
	// 	};
	// 	fetchNumber();
	// }, []);

	useEffect(() => {
		setIsExternal(externalReader);
	}, [externalReader]);

	// const deleteAllPdfs = async () => {
	// 	const files = await RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.DocumentDir);
	// 	for (let i = 0; i < files.length; i++) {
	// 		if (files[i].endsWith('.pdf')) {
	// 			RNFetchBlob.fs
	// 				.unlink(RNFetchBlob.fs.dirs.DocumentDir + '/' + files[i])
	// 				.catch((e) => console.log(e));
	// 		}
	// 	}
	// };

	const handleSwitchTheme = (value: boolean) => {
		setTheme(value ? 'dark' : 'light');
	};

	const handleSwitchExternal = (value: boolean) => {
		setExternalReader(value);
	};

	const handleDeleteAllPdf = () => {
		Alert.alert(
			'Biztos vagy benne?',
			'Ez a folyamat törli az összes letöltött könyvet (PDF)',
			[
				{
					text: 'Igen',
					// onPress: () => deleteAllPdfs(),
				},
				{
					text: 'Nem',
				},
			],
			{
				cancelable: true,
			},
		);
	};

	return (
		<View style={styles.settingsItem}>
			<View style={styles.divider}>
				<Text style={styles.mediumText}>Sötét téma használata</Text>
				<Switch value={isEnabled} onValueChange={handleSwitchTheme} />
			</View>
			<View style={styles.divider}>
				<Text style={styles.mediumText}>Külső pdf olvasó használata</Text>
				<Switch value={isExternal} onValueChange={handleSwitchExternal} />
			</View>
			<View style={styles.divider}>
				<TouchableOpacity style={styles.button} onPress={handleDeleteAllPdf}>
					<Text style={styles.mediumText}>Letöltött könyvek törlése</Text>
				</TouchableOpacity>
				<Text style={styles.mediumText}>({pdfs} pdf)</Text>
			</View>
		</View>
	);
};
export default SettingsScreen;
