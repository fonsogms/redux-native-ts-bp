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
const stateSelector = createStructuredSelector({
  rootState: makeSelectRoot(),
  rootPersist: makeSelectRootPersist(),
});
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
      <TouchableOpacity onPress={() => {}}>
        <View style={{ ...ButtonView.container }}>
          <Text style={{ ...PressHereText.container }}>
            Press here to navigate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RootScreen;
