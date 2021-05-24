import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { RootStateType } from './types';

const selectRootDomain = (state) => state.root || initialState;

const makeSelectRoot = () =>
  createSelector(
    selectRootDomain,
    (substate: RootStateType) => substate,
  );

export default makeSelectRoot;
export { selectRootDomain };
