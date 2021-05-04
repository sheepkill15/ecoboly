import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Action} from 'easy-peasy';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
  Books: undefined;
  Tree: String;
  Web: {uri: string; page: number};
};
export type HomeScreenNavigationProp = MaterialTopTabNavigationProp<
  RootTabParamList,
  'Home'
>;
export type SettingsScreenNavigationProp = MaterialTopTabNavigationProp<
  RootTabParamList,
  'Settings'
>;
export type BookScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Books'
>;

export type TreeScreenRouteProp = RouteProp<RootTabParamList, 'Tree'>;
export type WebScreenRouteProp = RouteProp<RootTabParamList, 'Web'>;

export type TreeScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Tree'
>;

export type WebScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Web'
>;

export type Subject = {
  iskonyv: boolean | undefined;
  isteszt: boolean | undefined;
  iserettsegi: boolean | undefined;
  isextra: boolean | undefined;
  kep: string;
  nev: string;
  erettlink: string | undefined;
  osztaly: string | undefined;
  tantargy: string | undefined;
  leiras: string | undefined;
};

export type Capitol = {
  nev: string;
};

export type Test = {
  hidden: boolean | undefined;
  link: string;
  nev: string;
  index: number | undefined;
  type: string | undefined;
};

export type Book = {
  elso: number;
  masodik: number;
  meret: number;
  link: string;
  nev: string;
  hidden: boolean | undefined;
  index: number | undefined;
  type: string | undefined;
};

export type Bac = {
  nev: string;
  link: string;
  hidden: boolean | undefined;
  index: number | undefined;
  type: string | undefined;
};

export type Extra = {
  nev: string;
  link: string;
  hidden: boolean | undefined;
  index: number | undefined;
  type: string | undefined;
};

export type Post = {
  kerdes: string;
  valaszIgen: number | undefined;
  valaszNem: number | undefined;
};

export type StoreModel = {
  subjects: Subject[];
  capitols: {[id: string]: Capitol[]};
  items: {[id: string]: Array<Bac | Test | Extra | Book>};
  userCode: string;
  bookStates: {[id: string]: {downloading: boolean; exists: boolean}};

  addSubjects: Action<StoreModel, Subject[]>;
  addCapitols: Action<StoreModel, {subject: string; capitols: Capitol[]}>;
  addItems: Action<
    StoreModel,
    {capitol: string; items: Array<Bac | Test | Extra | Book>}
  >;
  setItems: Action<StoreModel, {capitol: string; items: Array<Bac | Test | Extra | Book>}>;
  setCode: Action<StoreModel, string>;
  setDownloading: Action<StoreModel, {path: string; downloading: boolean}>;
  setExists: Action<StoreModel, {path: string; exists: boolean}>;
};

export type SettingsModel = {
  selectedTheme: 'light' | 'dark';
  externalReader: boolean;
  topNavigation: boolean;
  setTopNavigation: Action<SettingsModel, boolean>;
  setSelectedTheme: Action<SettingsModel, 'light' | 'dark'>;
  setExternalReader: Action<SettingsModel, boolean>;
};

export type Styles = {
  itemList: ViewStyle;
  image: ImageStyle;
  smallText: TextStyle;
  mediumText: TextStyle;
  largeText: TextStyle;
  treeItemsList: ViewStyle;
  treeItem: TextStyle;
  settingsItem: ViewStyle;
  divider: ViewStyle;
  button: ViewStyle;
  textInput: ViewStyle;
  buttonBox: ViewStyle;
  subjectItem: ViewStyle;
  subjectTitle: TextStyle;
  subjectContent: ViewStyle;
  subjectDescription: ViewStyle;
  editButton: ViewStyle;
};
