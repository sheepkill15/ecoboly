import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, createContextStore} from 'easy-peasy';
import {SettingsModel} from '../types';

const SettingsStore = createContextStore<SettingsModel>({
	selectedTheme: 'dark',
	externalReader: false,

	setSelectedTheme: action((state, payload) => {
		state.selectedTheme = payload;
		AsyncStorage.setItem('@settings_theme', payload).catch((e) =>
			console.log(e),
		);
	}),
	setExternalReader: action((state, payload) => {
		state.externalReader = payload;
		AsyncStorage.setItem('@settings_external', String(payload)).catch((e) =>
			console.log(e),
		);
	}),
});
export default SettingsStore;
