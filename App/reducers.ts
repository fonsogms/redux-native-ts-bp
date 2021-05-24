import { combineReducers } from 'redux';
// import AsyncStorage from '@react-native-community/async-storage';
import rootSaga from './sagas';
import configureStore from './configureStore';
import exampleReducer from './Containers/Example/reducer';
import rootContainerReducer from './Containers/root/reducer';
import rootReducerPersist from './Containers/root/reducerPersist';

export default () => {
  const appReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: exampleReducer,
    root: rootContainerReducer,
    rootPersist: rootReducerPersist,
  });

  const rootReducer = (state, action) => {
    if (
      action.type === 'miles/SignUp/LOGOUT_SUCCESS' ||
      action.type === 'miles/SignUp/SIGNUP_CANCEL_OK'
    ) {
      // AsyncStorage.multiRemove(['persist:rootPersist']);

      const { rootPersist } = state;
      // eslint-disable-next-line no-param-reassign
      state = { rootPersist };
    }

    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
