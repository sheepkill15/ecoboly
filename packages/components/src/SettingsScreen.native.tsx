import React, {useEffect, useState} from 'react';
import {Switch, View, Text, TouchableOpacity, Alert} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import RNFetchBlob from 'rn-fetch-blob';
import SettingsStore from './settings/SettingsStore';
import {Theme} from './settings/styles';
import {SettingsScreenNavigationProp} from './types';
import DataStore from "./firebase/datastore";
import AdBanner from "./loaders/ads";

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
	const setTopNavigation = SettingsStore.useStoreActions((actions) => actions.setTopNavigation);
	const [isEnabled, setIsEnabled] = useState(false);
	const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);
	const currTopNavigation = SettingsStore.useStoreState((state) => state.topNavigation);
	const externalReader = SettingsStore.useStoreState(
		(state) => state.externalReader,
	);
	const [styles] = useTheme(Theme, currTheme);

	const [pdfs, setPdfs] = useState(0);
	const [isExternal, setIsExternal] = useState(false);
	const [isOnTop, setIsOnTop] = useState(true);

	const setUserCode = DataStore.useStoreActions((actions) => actions.setCode);

	useEffect(() => {
		if (currTheme === 'dark') {
			setIsEnabled(true);
		} else {
			setIsEnabled(false);
		}
	}, [currTheme]);

	useEffect(() => {
		const fetchNumber = async () => {
			const files = await RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.DocumentDir);
			let sum = 0;
			for (let i = 0; i < files.length; i++) {
				if (files[i].endsWith('.pdf')) {
					sum++;
				}
			}
			setPdfs(sum);
		};
		fetchNumber();
	}, []);

	useEffect(() => {
		setIsExternal(externalReader);
	}, [externalReader]);

	useEffect(() => {
		setIsOnTop(currTopNavigation);
	}, [currTopNavigation]);

	const logout = () => setUserCode('');
	const deleteAllPdfs = async () => {
		const files = await RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.DocumentDir);
		for (let i = 0; i < files.length; i++) {
			if (files[i].endsWith('.pdf')) {
				RNFetchBlob.fs
					.unlink(RNFetchBlob.fs.dirs.DocumentDir + '/' + files[i])
					.catch((e) => console.log(e));
			}
		}
	};

	const handleSwitchTheme = (value?: boolean | undefined) => {
		if(typeof value === 'boolean') {
			setTheme(value ? 'dark' : 'light');
		}
	};
	const handleSwitchOnTop = (value?: boolean | undefined) => {
		if(typeof value === 'boolean') {
			setTopNavigation(value);
		}
	};

	const handleSwitchExternal = (value?: boolean | undefined) => {
		if(typeof value === 'boolean') {
			setExternalReader(value);
		}
	};

	const handleDeleteAllPdf = () => {
		Alert.alert(
			'Biztos vagy benne?',
			'Ez a folyamat t??rli az ??sszes let??lt??tt k??nyvet (PDF)',
			[
				{
					text: 'Igen',
					onPress: () => deleteAllPdfs(),
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
				<Text style={styles.mediumText}>S??t??t t??ma haszn??lata</Text>
				<Switch value={isEnabled} onValueChange={handleSwitchTheme} />
			</View>
			<View style={styles.divider}>
				<Text style={styles.mediumText}>K??ls?? pdf olvas?? haszn??lata</Text>
				<Switch value={isExternal} onValueChange={handleSwitchExternal} />
			</View>
			<View style={styles.divider}>
				<Text style={styles.mediumText}>Fenti navig??ci??</Text>
				<Switch value={isOnTop} onValueChange={handleSwitchOnTop} />
			</View>
			<View style={styles.divider}>
				<TouchableOpacity style={styles.button} onPress={handleDeleteAllPdf}>
					<Text style={styles.mediumText}>Let??lt??tt k??nyvek t??rl??se</Text>
				</TouchableOpacity>
				<Text style={styles.mediumText}>({pdfs} pdf)</Text>
			</View>
			<View style={styles.divider}>
				<TouchableOpacity style={styles.button} onPress={logout}>
					<Text style={styles.mediumText}>Kijelentkez??s</Text>
				</TouchableOpacity>
			</View>
			<View style={{alignItems: 'center'}}>
				<AdBanner />
			</View>
		</View>
	);
};
export default SettingsScreen;
