import {Styles} from '../types';
import {registerThemes} from 'react-native-themed-styles';

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
		width: 200,
		flexDirection: 'column',
	},
	smallText: {
		margin: 4,
		fontSize: 16,
		color: theme.textColor,
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
		width: '100%',
		borderRadius: 8,
		padding: 8,
		backgroundColor: theme.accentColor,
		color: theme.textColor,
	},
	buttonBox: {
		padding: 8,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	subjectItem: {
		backgroundColor: theme.backgroundColor,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 8,
		alignItems: 'flex-start',
		borderRadius: 16,
		flexDirection: 'row',
	},
	subjectTitle: {
		fontSize: 28,
		color: theme.textColor,
		borderBottomWidth: 1,
		borderBottomColor: theme.textColor,
	},
	subjectContent: {
		flexWrap: 'wrap',

		marginStart: 16,
		marginEnd: 24,
		flexDirection: 'column',
		flexBasis: '100%',
		flex: 1,

	},
	subjectDescription: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		width: '100%',
	},
	editButton: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		padding: 16, 
	}
}));

export {Theme};
