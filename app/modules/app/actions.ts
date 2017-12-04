import {createActions} from 'redux-actions';
import types from './types';

export const {imagesLoaded, initialized, userChosen} = createActions(
    types.IMAGES_LOADED,
    types.INITIALIZED,
    types.USER_CHOSEN
);
