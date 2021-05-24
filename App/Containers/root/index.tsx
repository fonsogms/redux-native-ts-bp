import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RootActions from './actions';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createStructuredSelector } from 'reselect';
import makeSelectRoot from './selectors';
import makeSelectRootPersist from './selectorsPersist';
import { ButtonView, MainView, PressHereText } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppNavigator from '../../Services/Navigation/AppNavigator';
import NavigationService from 'Services/Navigation/NavigationService';

const stateSelector = createStructuredSelector({
  rootState: makeSelectRoot(),
  rootPersist: makeSelectRootPersist(),
});
function getNavigationActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getNavigationActiveRouteName(route);
  }
  return route.routeName;
}
const RootScreen = () => {
  const { rootState, rootPersist } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rootPersist.deviceKey) {
      const deviceKey = uuidv4();
      dispatch(RootActions.setDeviceKey(deviceKey));
    }
  }, []);
  return (
    <View style={{ ...MainView.container }}>
      <AppNavigator
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        onNavigationStateChange={(prevState, currentState) => {
          //   const currentScreen = getNavigationActiveRouteName(currentState);
          //   const prevScreen = getNavigationActiveRouteName(prevState);
          //   if (
          //     prevScreen !== currentScreen &&
          //     currentScreen !== rootState.currentScreen
          //   ) {
          //     dispatch(RootActions.setCurrentScreen(currentScreen));
          //     trackingService.setScreen(currentScreen);
          //   }
        }}
      />
      {/*    <TouchableOpacity onPress={() => {}}>
        <View style={{ ...ButtonView.container }}>
          <Text style={{ ...PressHereText.container }}>
            Press here to navigate
          </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default RootScreen;
