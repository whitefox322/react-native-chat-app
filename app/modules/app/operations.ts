import {imagesLoaded, initialized, userChosen} from './actions';

const initialize = () => async (dispatch, getState) => {
    const {chosenUser} = getState().app;

    if (chosenUser) {
        dispatch(initialized(true));
    }
};

export default {
    initialize,
    imagesLoaded,
    userChosen
};