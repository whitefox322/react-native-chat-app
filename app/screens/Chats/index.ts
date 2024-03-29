import { connect } from 'react-redux';
import { compose, withProps, withState, withHandlers, hoistStatics } from 'recompose';

import { getAllChats, getAllMessages, removeChat, setVisit } from '../../modules/chats';
import ChatsScreen from './ChatsScreen';

const findLastMessage = (messages) => {
	const result = !messages.length ? [{ text: '', time: null }] : messages.filter((message, index) => {
		return index === messages.length - 1;
	});
	return {
		id: result[0].id,
		text: result[0].text,
		time: result[0].time
	};
};

const mapStateToProps = state => ({
	chats: getAllChats(state),
	messages: getAllMessages(state)
});

const enhance = compose(
	connect(mapStateToProps, {
		removeChat: removeChat,
		setVisit: setVisit
	}),
	withProps(props => ({
		lastMessage: findLastMessage(props.messages)
	})),
	withProps(props => ({
		status: props.lastMessage.time
	})),
	withState('showModal', 'setShowModal', false),
	withState('chatForRemove', 'setRemovedChat', null),
	withHandlers({
		goToChat: props => chat => {
			props.navigation.navigate('Chat', { chat: chat, lastMessage: props.lastMessage });
			props.setVisit(chat.id);
		},
		toggleShowModal: props => id => {
			props.setShowModal(!props.showModal);
			props.setRemovedChat(id);
		},
		removeChat: props => () => {
			props.removeChat(props.chatForRemove);
			props.setRemovedChat(null);
			props.setShowModal(false);
		}
	})
);

export default hoistStatics(enhance)(ChatsScreen);