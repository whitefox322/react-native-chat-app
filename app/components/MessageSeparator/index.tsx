import React from 'react';
import { compose, withProps } from 'recompose';
import { Text, View } from 'react-native';
import moment from 'moment';

import s from './styles';

interface IMessageSeparatorProps {
	time: number;
}

const MessageSeparator = (props: IMessageSeparatorProps) => {
	const { time } = props;

	return (
		<View style={s.container}>
			<Text style={s.time}>
				{moment(time).fromNow()}
				</Text>
		</View>
	);
};

const enhance = compose(
	withProps(props => ({
		time: props.time
	}))
);

export default enhance(MessageSeparator);
