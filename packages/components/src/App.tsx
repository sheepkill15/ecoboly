// import 'react-native-gesture-handler';
import React from 'react';
// import NavStack from './NavStack';

// import DataStore from './firebase/datastore';
// import SettingsStore from './settings/SettingsStore';
import { Text, View } from 'react-native';

console.log('Outside app');
const App = () => {
  console.log('Inside app');
  return <View style={{width: '100%', height: '100%'}}><Text style={{color: 'black'}}>Hello</Text></View>
    // <>
    //   <SettingsStore.Provider>
    //     <DataStore.Provider>
    //             <NavStack />
    //     </DataStore.Provider>
    //   </SettingsStore.Provider>
    // </>
    
};

export default App;
