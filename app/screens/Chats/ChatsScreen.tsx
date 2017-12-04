import React from 'react';
import {
	View,
	Text
} from 'react-native';

import { headerStyle } from '../../styles';
import { headerTitleStyle } from '../../styles';

const ChatsScreen: any = () => (
	<View>
		<Text>
			ChatsScreen screen
		</Text>
	</View>
);

ChatsScreen.navigationOptions = {
	title: 'Chats',
	...headerTitleStyle,
	...headerStyle
};

export default ChatsScreen;
