import produce from 'immer';
import { RootStateType } from './types';
export const initialState: RootStateType = {
  helloText: 'This is root',
};

/* eslint-disable default-case, no-param-reassign */
const rootReducer = produce((draft: RootStateType, action) => {}, initialState);

export default rootReducer;
