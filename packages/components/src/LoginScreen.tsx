import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import SettingsStore from './settings/SettingsStore';
import {Theme} from './settings/styles';

const LoginScreen = ({onLogin}: {onLogin: (newCode: string) => void}) => {
	const [code, setCode] = useState('');

	const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);
	const [styles, theme] = useTheme(Theme, currTheme);

	const handleLogin = () => {
		onLogin(code);
	}

	return (
		<SafeAreaView style={{height: '100%', backgroundColor: theme.accentColor}}>
			<View style={styles.itemList}>
				<TextInput
					style={styles.textInput}
					autoCapitalize="none"
					autoCompleteType="password"
					onSubmitEditing={handleLogin}
					onChangeText={setCode}
					placeholder="Írd be a kódot"
					placeholderTextColor={theme.textColor}
				/>
				<TouchableOpacity style={styles.button} onPress={handleLogin}>
					<Text style={styles.mediumText}>Belépés</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;
