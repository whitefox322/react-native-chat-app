import { imagesLoaded, initialized } from './actions';

const initialize = () => async (dispatch, getState) => {
	const { chosenUser } = getState().initial;

	if (chosenUser) {
		dispatch(initialized(true));
	}
};

export default {
	initialize,
	imagesLoaded
};
