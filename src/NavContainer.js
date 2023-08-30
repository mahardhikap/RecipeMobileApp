import { NavigationContainer } from '@react-navigation/native';
import IndexRoute from './IndexRoute';
import App from '../App';

const AppNavigator = () => (
  <NavigationContainer>
    <App/>
  </NavigationContainer>
);

export default AppNavigator;