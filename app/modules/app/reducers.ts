import { handleActions } from 'redux-actions';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialState = {
	initialUsers: [
		{
			id: 1,
			name: 'Mike',
			icon: require('../../assets/icons/user.png')
		},
		{
			id: 2,
			name: 'Katerina',
			icon: require('../../assets/icons/user.png')
		}
	],
	isImagesLoaded: false,
	initialized: false,
	chosenUser: null
};

const appReducer = handleActions({
	[types.IMAGES_LOADED]: mergeIn(action => ({ isImagesLoaded: action.payload })),
}, initialState);

export default appReducer;
