import {
  takeLatest,
  takeLeading,
  all,
  takeEvery,
  fork,
} from 'redux-saga/effects';

import * as RootConstants from './containers/Root/constants';
import * as RootSagas from './containers/Root/saga';

export default function* root() {
  yield all([]);
}
