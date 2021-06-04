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

export interface Item {
  link: string;
  nev: string;
  hidden: boolean | undefined;
  index: number | undefined;
  type: string | undefined;
}

export interface Test extends Item {
}

export interface Book extends Item {
  elso: number;
  masodik: number;
  meret: number;
}

export interface Bac extends Item {
}

export interface Extra extends Item {
}

export type Post = {
  kerdes: string;
  valaszIgen: number | undefined;
  valaszNem: number | undefined;
};

export type BookState = {
  exists: boolean;
  downloading: boolean;
}

export type StoreModel = {
  subjects: Subject[];
  capitols: {[id: string]: Capitol[]};
  items: {[id: string]: Array<Bac | Test | Extra | Book>};
  userCode: string;
  bookStates: {[id: string]: BookState};

  addSubjects: Action<StoreModel, Subject[]>;
  addCapitols: Action<StoreModel, {subject: string; capitols: Capitol[]}>;
  addItems: Action<
    StoreModel,
    {capitol: string; items: Array<Bac | Test | Extra | Book>}
  >;
  setCode: Action<StoreModel, string>;
  setBookState: Action<StoreModel, {path: string; state: BookState}>;
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
