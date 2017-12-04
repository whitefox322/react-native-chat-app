import {handleActions} from 'redux-actions';
import { REHYDRATE, PURGE } from 'redux-persist/lib/constants';
import R from 'ramda';

import {mergeIn} from '../../utils/stateHelpers';
import types from './types';

const initialState = {
    initialUsers: [
        {
            id: '1',
            name: 'Mike',
            icon: require('../../assets/icons/user.png')
        },
        {
            id: '2',
            name: 'Katerina',
            icon: require('../../assets/icons/user.png')
        }
    ],
    isImagesLoaded: false,
    initialized: false,
    chosenUser: null
};

const appReducer = handleActions({
    [types.IMAGES_LOADED]: mergeIn(action => ({isImagesLoaded: action.payload})),
    [types.USER_CHOSEN]: mergeIn(action => ({chosenUser: action.payload})),
    [REHYDRATE]: mergeIn(action => R.pathOr(initialState, ['payload', 'app'], action)),
    [PURGE]: mergeIn(initialState)
}, initialState);

export default appReducer;
