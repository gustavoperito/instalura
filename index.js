import { AppRegistry } from 'react-native';
import Navigator from './src';
import {name as appName} from './app.json';

const App = Navigator.StackNavigator; // Descomente para usar o StackNavigator.
// const App = Navigator.TabNavigator; // Descomente para usar o TabNavigator.
// const App = Navigator.DrawerNavigator; // Descomente para usar o DrawerNavigator.

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true;