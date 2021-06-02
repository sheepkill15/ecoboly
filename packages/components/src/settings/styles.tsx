import {Styles} from '../types';
import {registerThemes} from 'react-native-themed-styles';
import {Platform} from 'react-native';

const light = {
	backgroundColor: '#fff',
	accentColor: '#f0f0f0',
	textColor: 'black',
	activeText: 'tomato',
	inactiveText: 'grey',
};
const dark = {
	backgroundColor: '#313131',
	accentColor: '#545454',
	textColor: 'white',
	activeText: 'pink',
	inactiveText: 'grey',
};

const styleSheetFactory = registerThemes({light, dark}, () => 'dark');
const Theme = styleSheetFactory<Styles>((theme) => ({
	itemList: {
		backgroundColor: theme.backgroundColor,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 8,
		alignItems: 'flex-start',
		borderRadius: 16,
	},
	image: {
		...Platform.select({web: {width: '10%'}, native: {width: '40%'}}),
		aspectRatio: 0.76,
		resizeMode: 'contain',
	},
	smallText: {
		margin: 4,
		fontSize: 16,
		color: theme.textColor,
		flexWrap: 'wrap',
	},
	mediumText: {
		margin: 4,
		fontSize: 20,
		color: theme.textColor,
	},
	largeText: {
		margin: 4,
		fontSize: 28,
		color: theme.textColor,
	},
	treeItemsList: {
		paddingStart: 32,
		paddingBottom: 16,
	},
	treeItem: {
		margin: 8,
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	settingsItem: {
		margin: 8,
		// flex: 1,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: theme.backgroundColor,
		borderRadius: 16,
	},
	divider: {
		padding: 8,
		flex: 1,
		flexBasis: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		backgroundColor: theme.accentColor,
		borderRadius: 8,
		paddingStart: 8,
		paddingEnd: 8,
		margin: 8,
		alignItems: 'center',
	},
	textInput: {
		borderRadius: 8,
		padding: 8,
		margin: 4,
		backgroundColor: theme.accentColor,
		color: theme.textColor,
		width: '100%',
	},
	buttonBox: {
		padding: 4,
		flexDirection: 'row',
		justifyContent: 'space-between',

	},
	subjectItem: {
		backgroundColor: theme.backgroundColor,
		padding: 8,
		marginVertical: 8,
		marginHorizontal: 8,
		borderRadius: 16,
		flexDirection: 'row',
	},
	subjectTitle: {
		fontSize: 28,
		color: theme.textColor,
		borderBottomWidth: 1,
		borderBottomColor: theme.textColor,
		width: '100%',
	},
	subjectContent: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		flex: 1,
		margin: 8,
	},
	subjectDescription: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	editButton: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		padding: 16, 
	}
}));

export {Theme};
