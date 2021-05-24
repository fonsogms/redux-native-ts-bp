import 'Config';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './reducers';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {
  ActionSheetProvider,
  connectActionSheet,
} from '@expo/react-native-action-sheet';
import RootScreen from './Containers/root';

// create our store
const { store, persistor } = createStore();

/**
 * Note: This function should be called after redux-persist rehydration is complete
 *
 * See Services/Rehydration
 *
 * @method init
 *
 * @param {Store} store
 */

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ActionSheetProvider>
          <RootScreen></RootScreen>
        </ActionSheetProvider>
      </PersistGate>
    </Provider>
  );
};

// allow reactotron overlay for fast design in dev mode
export default connectActionSheet(App);
