import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import s from './styles';
import { styles } from '../../styles';

interface IChatItemProps {
	name: string;
	icon: any;
	status: boolean;
	lastMessage: {
		text: string;
		time: number;
	};
	onPress: () => void;
	onLongPress: () => void;
}

const ChatItem = (props: IChatItemProps) => {
	const { name, icon, status, lastMessage, onPress, onLongPress } = props;
	const style = status === 'read' ? s.status : s.unstatus;

	return (
		<TouchableOpacity style={s.container} onPress={onPress} onLongPress={onLongPress}>
			<Image
				style={[s.image, styles.withMarginRight]}
				source={icon}
			/>
			<Text style={s.name}>
				{name}
			</Text>
			<View style={[s.message, styles.withPaddingLeft]}>
				<Text style={s.text}>
					{lastMessage.text}
				</Text>
			</View>
			<Text style={s.time}>
				{moment(lastMessage.time).format('HH:mm')}
			</Text>
			<Text style={style}>
				{status}
			</Text>
		</TouchableOpacity>
	);
};

const enhance = compose(
	withProps(props => ({
		name: props.userName,
		icon: props.userIcon,
		status: props.status,
		lastMessage: props.lastMessage,
		onPress: props.onPress,
		onLongPress: props.onLongPress
	}))
);

export default enhance(ChatItem);
