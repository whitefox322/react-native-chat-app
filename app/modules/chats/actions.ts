import { createActions } from 'redux-actions';
import types from './types';

export const { removeChat } = createActions(
	types.REMOVE_CHAT
);

export const { addMessage } = createActions(
	types.ADD_MESSAGE
);

export const { setVisit } = createActions(
	types.SET_VISIT
);
