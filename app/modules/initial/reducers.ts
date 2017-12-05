import { handleActions } from 'redux-actions';
import { REHYDRATE, PURGE } from 'redux-persist/lib/constants';
import R from 'ramda';
import uuid from 'uuid/v4';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialState = {
	testUser: {
		id: uuid(),
		name: 'Test User',
		icon: require('../../assets/icons/user.png')
	},
	chosenUser: null
};

const appReducer = handleActions({
	[types.USER_CHOSEN]: mergeIn(action => ({ chosenUser: action.payload })),
	[REHYDRATE]: mergeIn(action => R.pathOr(initialState, ['payload', 'initial'], action)),
	[PURGE]: mergeIn(initialState)
}, initialState);

export default appReducer;
