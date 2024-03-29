import { handleActions } from 'redux-actions';
import { REHYDRATE, PURGE } from 'redux-persist/lib/constants';
import R from 'ramda';
import uuid from 'uuid/v4';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const chatID1 = uuid();
const chatID2 = uuid();
const userID1 = uuid();
const userID2 = uuid();
const messageID1 = uuid();
const messageID2 = uuid();

const initialState = {
	chatsID: [chatID1, chatID2],
	chats: {
		[chatID1]: {
			id: chatID1,
			userID: userID1,
			userName: 'Mike',
			userIcon: require('../../assets/icons/user1.png'),
			lastVisit: 1512504802494
		},
		[chatID2]: {
			id: chatID2,
			userID: userID2,
			userName: 'Katerina',
			userIcon: require('../../assets/icons/user2.png'),
			lastVisit: 1512505002354
		}
	},
	messagesID: [messageID1, messageID2],
	messages: {
		[messageID1]: {
			id: messageID1,
			userID: userID1,
			text: 'Hello everyone! ^_^',
			time: 1512504730054
		},
		[messageID2]: {
			id: messageID2,
			userID: userID2,
			text: 'Hi, Mike)',
			time: 1512504980602
		}
	}
};

const chatsReducer = handleActions({
	[types.REMOVE_CHAT]: mergeIn((action, state) => ({
		chatsID: state.chatsID.filter(id => id !== action.payload)
	})),
	[types.SET_VISIT]: mergeIn((action, state) => {
		return {
			chats: {
				...state.chats,
				[action.payload]: {
					...state.chats[action.payload],
					lastVisit: Date.now()
				}
			}
		};
	}),
	[types.ADD_MESSAGE]: mergeIn((action, state) => {
		return {
			messagesID: state.messagesID.concat([action.payload.id]),
			messages: {
				...state.messages,
				[action.payload.id]: {
					id: action.payload.id,
					userID: action.payload.message.userID,
					text: action.payload.message.text,
					time: action.payload.message.time
				}
			}
		};
	}),
	[REHYDRATE]: mergeIn(action => R.pathOr(initialState, ['payload', 'chats'], action)),
	[PURGE]: mergeIn(initialState)
}, initialState);

export default chatsReducer;
