import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RootScreen from '../../Containers/root';
import ExampleScreen from 'Containers/Example';
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createSwitchNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    ExampleScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'ExampleScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig

    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default createAppContainer(StackNavigator);
