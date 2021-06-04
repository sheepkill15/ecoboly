//import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const appDatabase = database();

export const getDatabase = () => appDatabase;
