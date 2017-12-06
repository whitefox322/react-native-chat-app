import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { compose, withState, withProps, withHandlers, hoistStatics, lifecycle } from 'recompose';
import uuid from 'uuid/v4';

import { getAllMessages, addMessage, setVisit } from '../../modules/chats';
import ChatScreen from './ChatScreen';

const sendMessage = ({ dispatch, activeMessage, setActiveMessage, navigation }) => flatList => {
	const chat = navigation.state.params.chat;
	const messageID = uuid();
	const message = {
		id: messageID,
		message: {
			id: messageID,
			userID: chat.userID,
			text: activeMessage,
			time: Date.now()
		}
	};

	dispatch(addMessage(message));
	dispatch(setVisit(chat.id));
	Keyboard.dismiss();
	flatList.scrollToEnd();
	setActiveMessage('');
};

const mapStateToProps = state => ({
	messages: getAllMessages(state)
});

const enhance = compose(
	connect(mapStateToProps),
	withState('activeKeyboard', 'setActiveKeyboard', false),
	withState('activeMessage', 'setActiveMessage', ''),
	withHandlers({
		keyboardDidShow: props => () => {
			props.setActiveKeyboard(true);
		},
		keyboardDidHide: props => () => {
			props.setActiveKeyboard(false);
		}
	}),
	withHandlers({
		setMessage: props => value => {
			props.setActiveMessage(value);
		}
	}),
	withHandlers({
		sendMessage
	}),
	lifecycle({
		componentDidMount () {
			this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.props.keyboardDidShow);
			this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.props.keyboardDidHide);
		},
		componentWillUnmount () {
			this.keyboardDidShowListener.remove();
			this.keyboardDidHideListener.remove();
		}
	})
);

export default hoistStatics(enhance)(ChatScreen);
