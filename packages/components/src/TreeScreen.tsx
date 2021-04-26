import React, {RefObject, useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Text, Linking, View} from 'react-native';
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
import ResponsiveList from './ResponsiveList';

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
	}, [capitols, retrieveCapitols, subject]);

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
				}
			}
			console.log(books);
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
	}, [selected, items, retrieveItems]);

	const handlePress = (fejezet: string) => {
		if (fejezet === selected) {
			setSelected('');
		} else {
			setSelected(fejezet);
		}
	};

	const handleItemPress = (item: Book | Test | Bac | Extra) => {
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
		let newItem: Book | Test;
		switch(data.ref.type) {
			case 'Könyv': {
				newItem = {
					nev: data['Név'],
					link: data['Link'],
					meret: data['Méret'],
					elso: parseInt(data['Első']),
					masodik: parseInt(data['Második']),
					type: 'book'
				} as Book;
				break;
			}
			case 'Teszt': {
				newItem = {
					nev: data['Név'],
					link: data['Link'],
					type: 'test',
				} as Test;
				break;
			}
			case 'Érettségi': {
				newItem = {
					nev: data['Név'],
					link: data['Link'],
					type: 'bac',
				} as Bac;
				break;
			}
			case 'Extra': {
				newItem = {
					nev: data['Név'],
					link: data['Link'],
					type: 'extra',
				} as Extra;
				break;
			}
			default: {
				newItem = {
					nev: data['Név'],
					link: data['Link']
				} as Extra;
				break;
			}
		}
		retrieveItems({capitol: data['ref'].db as string, items: [{...newItem}]});
		delete newItem['type'];
		let dbString: string = '';
		switch(data.ref.type) {
			case 'Könyv': {
				dbString = `/Books/${data.ref.db}/`;
				break;
			}
			case 'Teszt': {
				dbString = `/Tesztek/${data.ref.db}/`;
				break;
			}
			case 'Érettségi': {
				dbString = `/Bac/${data.ref.db}/`;
				break;
			}
			case 'Extra': {
				dbString = `/Extrak/${data.ref.db}/`;
				break;
			}
		}
		getDatabase().ref(dbString).once('value').then((snapshot) => {
			getDatabase().ref(dbString + snapshot.numChildren()).set(newItem).catch((e) => console.log(e));
		}).catch((e) => console.log(e));
	}

	const treeItem = ({item}: {item: Book | Test | Bac | Extra}) => {
		const data: any = {'Név': item.nev, 'Link': item.link, 'Rejtve': item.hidden ?? false};
		data['ref'] = item.type;
		if(item.type === 'book') {
			data['Méret'] = (item as Book).meret;
			data['Első'] = (item as Book).elso;
			data['Második'] = (item as Book).masodik;
		}
		return (isAdmin || !item.hidden) ? (
			<>
			<TouchableOpacity onPress={() => handleItemPress(item)}>
				<View style={styles.treeItem}>
					{icons[item.type as string]}
					<Text style={[styles.mediumText, {marginStart: 8}]}>{item.nev}</Text>
				</View>
			</TouchableOpacity>
			<Edit variant={'Edit'} data={data} onSave={() => console.log('Press')} />
			</>
		) : (
			<></>
		);
	}
		

	const capitolItem = ({item}: {item: Capitol}) => {
		return (
		<>
			<TouchableOpacity
				style={styles.itemList}
				onPress={() => handlePress(item.nev)}>
				<Text style={styles.mediumText}>{item.nev}</Text>
			</TouchableOpacity>
			{selected === item.nev ? (
				<><ResponsiveList
					style={styles.treeItemsList}
					data={items}
					renderItem={treeItem}
					initialNumToRender={items?.length}
					keyExtractor={(item: Bac | Test | Extra | Book) => item.nev}
				/></>
			) : (
				<Edit variant={'Add'} data={{ref: {
					db: item.nev
				}}} onSave={handleAddItem} />
			)}
		</>
	);}

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
				<ResponsiveList
					data={capitols}
					renderItem={capitolItem}
					extraData={[selected, items]}
					initialNumToRender={capitols?.length}
					keyExtractor={(item: Capitol) => item.nev}
				/>
			) : (
				<Text>Betöltés...</Text>
			)}
			<BookElement currBook={currBook} styles={styles.itemList} refRBSheet={refRBSheet} onOpen={handleOpenBook} />
		</>
	);
};

export default TreeScreen;
