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
	const setDownloading = store.useStoreActions(
		(actions) => actions.setDownloading,
	);
	const setExists = store.useStoreActions((actions) => actions.setExists);

	const [page, setPage] = useState(0);

	useEffect(() => {
		const checkIfExists = async () => {
			const ex = await RNFetchBlob.fs.exists(targetDir);
			setExists({
				path: targetDir,
				exists: ex,
			});
		};
		checkIfExists();
	}, [targetDir, setExists]);

	const handleDownload = async () => {
		if (bookState.downloading) {
			return;
		}
		setDownloading({
			path: targetDir,
			downloading: true,
		});
		await RNFetchBlob.config({
			path: targetDir,
		}).fetch('GET', book.link);
		setDownloading({
			path: targetDir,
			downloading: false,
		});
		setExists({
			path: targetDir,
			exists: true,
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
		<View style={styles.image}>
			<Text style={styles.mediumText}>{book.nev}</Text>
			{bookState && !bookState.exists ? (
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
			) : (
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
			)}
		</View>
	);
};

export default BottomBook;
