import React, {RefObject, useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Text, Linking, View, FlatList} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useTheme} from 'react-native-themed-styles';
import store from './firebase/datastore';
import {getDatabase} from './firebase/firebase';
import {Theme} from './settings/styles';
import {
	Bac,
	Book,
	Capitol,
	Extra,
	Test,
	Item,
	TreeScreenNavigationProp,
	TreeScreenRouteProp,
} from './types';

import PdfSvg from './res/pdf';
import LinkSvg from './res/link';
import TestSvg from './res/test';
import BacSvg from './res/bac';
import SettingsStore from './settings/SettingsStore';

import BookElement from './loaders/book';
import OpenPdfExtern from './loaders/openpdfextern';
import bookOpenWrapper from './loaders/bookopen';

import Edit from './Edit';
import { CodeRegExTeacher } from './constants';

import {createDataFromItem, createItemFromData, GetDbPath, stringToType} from "./utils";

type Props = {
	route: TreeScreenRouteProp;
	navigation: TreeScreenNavigationProp;
};

const TreeScreen = ({route, navigation}: Props) => {

	const [selected, setSelected] = useState('');
	const subject = route.params as string;
	const capitols = store.useStoreState((state) => state.capitols[subject]);
	const items = store.useStoreState((state) => state.items[selected]);
	const retrieveCapitols = store.useStoreActions(
		(actions) => actions.addCapitols,
	);
	const retrieveItems = store.useStoreActions((actions) => actions.addItems);
	const currTheme = SettingsStore.useStoreState((state) => state.selectedTheme);
	const externalReader = SettingsStore.useStoreState(
		(state) => state.externalReader,
	);
	useEffect(() => {
		navigation.setOptions({title: subject ?? 'Betöltés...'});
	}, [subject])

	const [styles, theme] = useTheme(Theme, currTheme);

	// Admin
	const userCode = store.useStoreState((state) => state.userCode);
	const isAdmin = userCode.match(CodeRegExTeacher);

	const refRBSheet: RefObject<RBSheet> = useRef(null);

	const [currBook, setCurrBook] = useState<Book>();
	const icons: {[id: string]: JSX.Element} = {
		book: <PdfSvg width={32} height={32} fill={theme.textColor} />,
		extra: <LinkSvg width={32} height={32} fill={theme.textColor} />,
		test: <TestSvg width={32} height={32} fill={theme.textColor} />,
		bac: <BacSvg width={32} height={32} fill={theme.textColor} />,
	};

	useEffect(() => {
		const fetchCapitols = async () => {
			const newCapitols = await getDatabase()
				.ref(`/egysegek/${subject}`)
				.once('value');
			retrieveCapitols({subject: subject, capitols: newCapitols.val()});
		};
		if (!capitols) {
			fetchCapitols();
			console.log('Fetch capitols!');
		}
	}, [subject]);

	useEffect(() => {
		const fetchBooks = async () => {
			const books = (
				await getDatabase().ref(`Books/${selected}`).once('value')
			).val() as Book[];
			if (!books) {
				return;
			}
			for (let i = 0; i < books.length; i++) {
				if (books[i]) {
					books[i].type = 'book';
					books[i].index = i;
				}
			}
			retrieveItems({capitol: selected, items: books});
		};
		const fetchTests = async () => {
			const tests = (
				await getDatabase().ref(`Tesztek/${selected}`).once('value')
			).val() as Test[];
			if (!tests) {
				return;
			}
			for (let i = 0; i < tests.length; i++) {
				if (tests[i]) {
					tests[i].type = 'test';
					tests[i].index = i;
				}
			}
			retrieveItems({capitol: selected, items: tests});
		};
		const fetchBacs = async () => {
			const bacs = (
				await getDatabase().ref(`Bac/${selected}`).once('value')
			).val() as Bac[];
			if (!bacs) {
				return;
			}
			for (let i = 0; i < bacs.length; i++) {
				if (bacs[i]) {
					bacs[i].type = 'bac';
					bacs[i].index = i;
				}
			}
			retrieveItems({capitol: selected, items: bacs});
		};
		const fetchExtras = async () => {
			const extras = (
				await getDatabase().ref(`Extrak/${selected}`).once('value')
			).val() as Extra[];
			if (!extras) {
				return;
			}
			for (let i = 0; i < extras.length; i++) {
				if (extras[i]) {
					extras[i].type = 'extra';
					extras[i].index = i;
				}
			}
			retrieveItems({capitol: selected, items: extras});
		};
		if (!items && selected !== '') {
			fetchBooks();
			fetchTests();
			fetchBacs();
			fetchExtras();
			console.log('Fetch books, tests, bacs, extras!');
		}
	}, [selected]);

	const handlePress = (fejezet: string) => {
		if (fejezet === selected) {
			setSelected('');
		} else {
			setSelected(fejezet);
		}
	};

	const handleItemPress = (item: Item) => {
		if (item.type === 'test') {
			navigation.navigate('Web', {uri: item.link, page: 0});
		} else if (item.type === 'bac' || item.type === 'extra') {
			Linking.canOpenURL(item.link).then((supported) => {
				if (supported) {
					Linking.openURL(item.link);
				} else {
					console.log('Nem tudtam megnyitni a linket:' + item.link);
				}
			});
		} else {
			setCurrBook(item as Book);
			refRBSheet.current?.open();
			bookOpenWrapper(item as Book);
		}
	};
	
	const handleAddItem = (data: any) => {
		const newItem = createItemFromData(data);
		retrieveItems({capitol: data['ref'].db as string, items: [{...newItem}]});
		delete newItem['type'];
		const dbString = GetDbPath(data.ref.type, data['ref'].db);
		
		getDatabase().ref(dbString).once('value').then((snapshot) => {
			getDatabase().ref(dbString + snapshot.numChildren()).set(newItem).catch((e) => console.log(e));
		}).catch((e) => console.log(e));
	}
	const handleItemSave = async (data: {[id: string]: any}) => {

		const dbString = GetDbPath(data.ref.type, data.ref.db) + data.ref.index;
		let newItem: Item = createItemFromData(data);
		await getDatabase().ref(dbString).update(newItem).catch((e) => console.log(e));
		const newItems = items;
		newItem = {...newItem, type: stringToType[data.ref.type], index: data.ref.index};
		newItems[data.ref.realIndex] = newItem;
		retrieveItems({capitol: selected, items: newItems});
	}

	const treeItem = ({item}: {item: Item}) => {
		const data = createDataFromItem(item, selected, items);
		return (isAdmin || !item.hidden) ? (
			<>
			<TouchableOpacity onPress={() => handleItemPress(item)}>
				<View style={styles.treeItem}>
					{icons[item.type as string]}
					<Text style={[styles.mediumText, {marginStart: 8}]}>{item.nev}</Text>
					{isAdmin && <TouchableOpacity style={styles.button}
									   onPress={() => handleItemSave({...data, 'Rejtve': !item.hidden})}>
						<Text style={styles.mediumText}>{item.hidden ? 'Rejtve' : 'Mutatva'}</Text>
					</TouchableOpacity>}
				</View>
			</TouchableOpacity>
			<Edit variant={'Edit'} data={data} onSave={handleItemSave} />
			</>
		) : <></>;
	};
		

	const capitolItem = ({item}: {item: Capitol}) => {
		return (
			<>
				<TouchableOpacity
					style={styles.itemList}
					onPress={() => handlePress(item.nev)}>
					<Text style={styles.mediumText}>{item.nev}</Text>
					<Edit variant={'Add'} data={{ref: {
							db: item.nev
						}}} onSave={handleAddItem} />
				</TouchableOpacity>

				{(selected === item.nev) &&
					<FlatList
						style={styles.treeItemsList}
						data={items}
						renderItem={treeItem}
						initialNumToRender={items?.length}
						keyExtractor={(item: Item) => item.nev} />}
			</>
		)
	};

	const handleOpenBook = (uri: string, page: number) => {
		refRBSheet.current?.close();
		if (!externalReader) {
			navigation.navigate('Web', {
				uri: uri,
				page: currBook ? page - currBook.elso : page,
			});
		} else {
			OpenPdfExtern(uri);
		}
	};

	return (
		<>
			{capitols ? (
				<FlatList
					data={capitols}
					renderItem={capitolItem}
					extraData={[selected, items]}
					initialNumToRender={capitols?.length}
					keyExtractor={(item: Capitol) => item.nev}
				/>
			) : (
				<Text>Betöltés...</Text>
			)}
			<BookElement currBook={currBook} styles={{...styles.itemList, alignItems: 'center'}} refRBSheet={refRBSheet} onOpen={handleOpenBook} />
		</>
	);
};

export default TreeScreen;
