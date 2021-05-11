import { AppRegistry } from 'react-native';

import App from 'components/src/App';

require("@babel/polyfill"); // this should be include at the top

AppRegistry.registerComponent('bolyai_monorepo', () => App)
AppRegistry.runApplication('bolyai_monorepo', {
  rootTag: document.getElementById('root'),
})