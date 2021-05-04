import React, { useEffect } from 'react';
import {
	NavigationContainer,
	DarkTheme,
	DefaultTheme,
} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './HomeScreen';
import BookScreen from './BookScreen';
import SettingsScreen from './SettingsScreen';
import {Dimensions, Image, ImageSourcePropType, StatusBar, View} from 'react-native';
import store from './firebase/datastore';
import { CodeRegExStudent, CodeRegExTeacher } from './constants';
import LoginScreen from './LoginScreen';
import SettingsStore from './settings/SettingsStore';
import { getDatabase } from './firebase/firebase';
import { Subject } from './types';
import { useTheme } from 'react-native-themed-styles';
import { Theme } from './settings/styles';

import HomeIC from './res/home';
import HomeOutlineIC from './res/home-outline';
import BookIC from './res/book';
import BookOutlineIC from './res/book-outline';
import SettingsIC from './res/settings';
import SettingsOutlineIC from './res/settings-outline';

const icons: ({[id: string]: (props: any) => JSX.Element}) = {
	home: HomeIC,
	'home-outline': HomeOutlineIC,
	book: BookIC,
	'book-outline': BookOutlineIC,
	settings: SettingsIC,
	'settings-outline': SettingsOutlineIC,
}

const Tab = createMaterialTopTabNavigator();

const NavStack = () => {
	const code = store.useStoreState((state) => state.userCode);
	const isCode = code.match(CodeRegExStudent) || code.match(CodeRegExTeacher);
	const retrieveCode = store.useStoreActions((actions) => actions.setCode);

	const saveCode = (newCode: string) => {
		retrieveCode(newCode);
		AsyncStorage.setItem('@user_code', newCode).catch((e) => console.log(e));
	};

	const addSubjects = store.useStoreActions((actions) => actions.addSubjects);
	const setSelectedTheme = SettingsStore.useStoreActions(
		(actions) => actions.setSelectedTheme,
	);
	const setIsExternal = SettingsStore.useStoreActions(
		(actions) => actions.setExternalReader,
	);
	const setTopNavigation = SettingsStore.useStoreActions((actions) => actions.setTopNavigation);
	
	const topNav = SettingsStore.useStoreState((state) => state.topNavigation);
	const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);

	const [styles, theme] = useTheme(Theme, currTheme);

	useEffect(() => {
		const fetchSubjects = async () => {
			const subjects = await getDatabase().ref('/Tantargy/').once('value');
			const value: Array<Subject> = subjects.val();
			addSubjects(value.slice(1));
		};
		fetchSubjects();
		console.log('Fetch subjects!');
	}, [addSubjects, setSelectedTheme]);

	useEffect(() => {
		const fetchCode = async () => {
			try {
				const value = await AsyncStorage.getItem('@user_code');
				if (value !== null) {
					retrieveCode(value);
				}
			} catch (e) {
				console.log(e);
			}
		};
		const fetchTheme = async () => {
			try {
				const value: string | null = await AsyncStorage.getItem('@settings_theme');
				if (value !== null) {
					setSelectedTheme(value as 'light' | 'dark');
				}
			} catch (e) {
				console.log(e);
			}
		};
		const fetchExternal = async () => {
			try {
				const value = await AsyncStorage.getItem('@settings_external');
				if (value !== null) {
					setIsExternal(value === 'true');
				}
			} catch (e) {
				console.log(e);
			}
		};
		const fetchTopNavigation = async () => {
			try {
				const value = await AsyncStorage.getItem('@settings_top_navigation');
				if(value !== null) {
					setTopNavigation(value === 'true');
				}
			}
			catch(e) {
				console.log(e);
			}
		};
		fetchTheme();
		fetchCode();
		fetchExternal();
		fetchTopNavigation();
	}, [retrieveCode, setSelectedTheme, setIsExternal]);
	return isCode !== null ? (
		<View style={{width: '100%', height: '100%', backgroundColor: theme.backgroundColor}}>
			<StatusBar barStyle={currTheme === 'light' ? 'dark-content' : 'light-content'} backgroundColor={theme.backgroundColor} />
			<NavigationContainer
				theme={currTheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Tab.Navigator
					swipeEnabled={false}
					initialLayout={{ width: Dimensions.get('window').width }}
					lazy={true}
					tabBarPosition={topNav ? 'top' : 'bottom'}
					tabBarOptions={{
						activeTintColor: theme.activeText,
						inactiveTintColor: theme.inactiveText,
					// 	showIcon: true,
					// 	showLabel: false,
					// 	style: {
					// 		flexShrink: 0,
					// 		alignItems: 'flex-end',
					// 		justifyContent: 'flex-end',
					// 	},
					// 	tabStyle: {
					// 		width: '5rem'
					// 	},
					// 	renderIndicator: () => <View style={{width: '100%', height: '100%', borderBottomWidth: 1, borderBottomColor: 'violet'}}/>,
					}}
					screenOptions={({route}) => ({
						tabBarIcon: ({focused, color}) => {
							let iconName = '';
							if(route.name === 'Kezdőlap') {
								iconName = focused ? 'home' : 'home-outline';
							}
							else if(route.name === 'Könyvek') {
								iconName = focused ? 'book' : 'book-outline';
							}
							else {
								iconName = focused ? 'settings' : 'settings-outline';
							}
							return icons[iconName]({fill: color, stroke: color});
						},
					})}
					backBehavior="none">
					<Tab.Screen name="Kezdőlap" component={HomeScreen} />
					<Tab.Screen name="Könyvek" component={BookScreen} />
					<Tab.Screen name="Beállítások" component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</View>
	) : (
		<View style={{width: '100%', height: '100%', backgroundColor: theme.backgroundColor}}>
			<LoginScreen onLogin={saveCode} />
		</View>
	);
};

export default NavStack;
