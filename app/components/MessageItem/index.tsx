import React from 'react';
import { compose, withProps } from 'recompose';
import { Text, View } from 'react-native';
import moment from 'moment';

import { MessageSeparator } from '../../components';
import s from './styles';
import { styles } from '../../styles';

interface IMessageItemProps {
	id: string;
	userID: string;
	user: string;
	text: string;
	time: number;
	messages: Array<any>;
}

const MessageItem = (props: IMessageItemProps) => {
	const { id, text, time, user, userID, messages } = props;
	const index = messages.findIndex(item => {
		return item.id === id;
	});

	return (
		<View>
			{
				(index !== 0 && messages[index].time - messages[index - 1].time > 300000) ?
					<MessageSeparator time={time}/> :
					null
			}
			<View style={s.container}>
				{
					user === userID ?
						<View style={[s.message, s.right]}>
							<Text style={s.time}>
								{moment(time).format('HH:mm')}
							</Text>
							<Text style={s.textUser}>
								{text}
							</Text>
						</View> :
						<View style={[s.message, s.left]}>
							<Text style={s.textFriend}>
								{text}
							</Text>
							<Text style={s.time}>
								{moment(time).format('HH:mm')}
							</Text>
						</View>
				}
			</View>
		</View>
	);
};

const enhance = compose(
	withProps(props => ({
		id: props.id,
		userID: props.userID,
		text: props.text,
		time: props.time,
		messages: props.messages
	}))
);

export default enhance(MessageItem);
