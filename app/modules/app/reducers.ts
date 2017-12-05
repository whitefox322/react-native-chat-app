import { handleActions } from 'redux-actions';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialState = {
	isImagesLoaded: false,
	initialized: false
};

const appReducer = handleActions({
	[types.IMAGES_LOADED]: mergeIn(action => ({ isImagesLoaded: action.payload }))
}, initialState);

export default appReducer;
