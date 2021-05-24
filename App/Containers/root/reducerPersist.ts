import produce from 'immer';
import * as RootConstants from './constants';
import { RootStatePersistType } from './types';

export const initialStatePersist: RootStatePersistType = {
  deviceKey: null,
};

/* eslint-disable default-case, no-param-reassign */
const rootPersistReducer = produce((draft, action) => {
  switch (action.type) {
    case RootConstants.SET_DEVICE_KEY:
      draft.deviceKey = action.deviceKey;
  }
}, initialStatePersist);

export default rootPersistReducer;
