import { imagesLoaded, initialized } from './actions';

export const initialize = () => async (dispatch, getState) => {
	const { chosenUser } = getState().app;

	if (chosenUser) {
		dispatch(initialized(true));
	}
};

export default {
	initialize,
	imagesLoaded
};