import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import RNFetchBlob from 'rn-fetch-blob';
import store from './firebase/datastore';
import SettingsStore from './settings/SettingsStore';
import {Theme} from './settings/styles';
import {Book} from './types';

const BottomBook = ({
	onOpen,
	book,
}: {
  onOpen: (uri: string, page: number) => void;
  book: Book;
}) => {
	const targetDir = RNFetchBlob.fs.dirs.DocumentDir + `/${book.nev}`;

	const bookState = store.useStoreState((state) => state.bookStates[targetDir]);
	const setBookState = store.useStoreActions(
		(actions) => actions.setBookState,
	);

	const [page, setPage] = useState(0);

	useEffect(() => {

		const checkIfExists = async () => {
			if(bookState.downloading) return;
			const ex = await RNFetchBlob.fs.exists(targetDir);
			setBookState({
				path: targetDir,
				state: {
					exists: ex,
					downloading: false,
				},
			});
		};
		checkIfExists();
	}, []);

	const handleDownload = async () => {
		if (bookState.downloading) {
			return;
		}
		setBookState({
			path: targetDir,
			state: {
				exists: false,
				downloading: true
			},
		});
		await RNFetchBlob.config({
			path: targetDir,
		}).fetch('GET', book.link);
		setBookState({
			path: targetDir,
			state: {
				exists: true,
				downloading: false
			},
		});
	};

	const handleChangePage = (text: string) => {
		if (text === '') {
			setPage(0);
			return;
		}
		try {
			const pageNr = parseInt(text, 10);
			if (!isNaN(pageNr)) {
				setPage(pageNr);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);
	const [styles, theme] = useTheme(Theme, currTheme);

	return (
		<View style={styles.subjectTitle}>
			<Text style={styles.mediumText}>{book.nev}</Text>
			{bookState?.exists ? (
				<>
					<TouchableOpacity
						style={styles.button}
						onPress={() => onOpen(targetDir, page)}>
						<Text style={styles.mediumText}>Megnyitás</Text>
					</TouchableOpacity>
					<View style={styles.itemList}>
						<TextInput
							style={styles.textInput}
							placeholder="Oldal"
							onChangeText={handleChangePage}
							keyboardType="numeric"
							textContentType="telephoneNumber"
							placeholderTextColor={theme.textColor}
							value={page.toString()}
							onSubmitEditing={() => onOpen(targetDir, page)}
						/>
						<Text style={styles.smallText}>
              ({book.elso} - {book.masodik})
						</Text>
					</View>
				</>
			) : (
				<>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleDownload()}>
						<Text style={styles.mediumText}>
							{bookState.downloading ? '...' : 'Letöltés'}
						</Text>
					</TouchableOpacity>
					<Text style={styles.smallText}>Méret: {book.meret} MB</Text>
				</>
			)}
		</View>
	);
};

export default BottomBook;
