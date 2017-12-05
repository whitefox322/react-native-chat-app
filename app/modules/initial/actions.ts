import { createActions } from 'redux-actions';
import types from './types';

export const { userChosen } = createActions(
	types.USER_CHOSEN
);
