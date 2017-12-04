import React from 'react';
import {
	View,
	Text
} from 'react-native';

import { headerStyle } from '../../styles';
import { headerTitleStyle } from '../../styles';

const FriendsScreen: any = () => (
	<View>
		<Text>
			FriendsScreen screen
		</Text>
	</View>
);

FriendsScreen.navigationOptions = {
	title: 'Friends',
	...headerTitleStyle,
	...headerStyle
};

export default FriendsScreen;

