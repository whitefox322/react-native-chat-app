import React from 'react';
import { View, Text, Image } from 'react-native';
import { touchable } from '../../utils/enhancers';
import s from './styles';

const UserItem = (props) => {
	const {name, icon} = props;

	return (
		<View>
			<Image
				source={icon}
			/>
			<Text>
				{name}
			</Text>
		</View>
	);
};

export default touchable(UserItem);
