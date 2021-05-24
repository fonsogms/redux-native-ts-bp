import produce from 'immer';
import { EXAMPLE_CHANGE_NUMBER } from './constants';

export const initialState = {
  number: 0,
};

/* eslint-disable default-case, no-param-reassign */
const menuReducer = produce((draft, action) => {
  switch (action.type) {
    case EXAMPLE_CHANGE_NUMBER:
      draft.number = action.number;
      break;
  }
}, initialState);

export default menuReducer;
