import { AppRegistry } from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('bolyai_monorepo', () => App)
AppRegistry.runApplication('bolyai_monorepo', {
  rootTag: document.getElementById('root'),
})