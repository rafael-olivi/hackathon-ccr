import { registerRootComponent } from 'expo';

import App from './src/App';
import Navigator from './src/Navigator';
import Auth from './src/screens/Auth';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Navigator);
