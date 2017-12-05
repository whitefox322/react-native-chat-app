import { createActions } from 'redux-actions';
import types from './types';

export const { removeChat } = createActions(
	types.REMOVE_CHAT
);
