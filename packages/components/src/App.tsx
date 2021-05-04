import 'react-native-gesture-handler';
import React from 'react';
import {
    Dimensions,
    StatusBar, View,
} from 'react-native';
import NavStack from './NavStack';

import DataStore from './firebase/datastore';
import SettingsStore from './settings/SettingsStore';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SettingsStore.Provider>
        <DataStore.Provider>
                <NavStack />
        </DataStore.Provider>
      </SettingsStore.Provider>
    </>
  );
};

export default App;
