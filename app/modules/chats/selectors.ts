import { createSelector } from 'reselect';
import R from 'ramda';

const getAllChatsIds = R.pathOr([], ['chats', 'chatsID']);
const getAllChatsEntities = R.pathOr([], ['chats', 'chats']);

export const getAllChats = createSelector(
	[
		getAllChatsIds,
		getAllChatsEntities
	],
	(ids, entities) => ids.map(id => entities[id])
);

const getAllMessagesIds = R.pathOr([], ['chats', 'messagesID']);
const getAllMessagesEntities = R.pathOr([], ['chats', 'messages']);

export const getAllMessages = createSelector(
	[
		getAllMessagesIds,
		getAllMessagesEntities
	],
	(ids, entities) => ids.map(id => entities[id])
);
