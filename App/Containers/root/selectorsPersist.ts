import { createSelector } from 'reselect';
import { initialStatePersist } from './reducerPersist';
import { RootStatePersistType } from './types';

/**
 * Direct selector to the map state domain
 */

const selectRootPersistDomain = (statePersistent) =>
  statePersistent.rootPersist || initialStatePersist;

/**
 * Other specific selectors
 */

const makeSelectRootPersist = () =>
  createSelector(
    selectRootPersistDomain,
    (substate: RootStatePersistType) => substate,
  );

export default makeSelectRootPersist;

export { selectRootPersistDomain, makeSelectRootPersist };
