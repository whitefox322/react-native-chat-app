import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import {
	ChatsScreen,
	ChatScreen,
	FriendsScreen,
	UserScreen
} from '../screens';

const routes = {
	[screens.Chats]: {
		screen: StackNavigator({
			init: { screen: ChatsScreen },
			[screens.Chat]: { screen: ChatScreen }
		})
	},
	[screens.Friends]: {
		screen: StackNavigator({
			init: { screen: FriendsScreen },
			[screens.User]: { screen: UserScreen }
		})
	}
};

const TabNavigatorConfig = {
	tabBarPosition: 'bottom',
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#e91e63'
	}
};

export default TabNavigator(routes, TabNavigatorConfig);
