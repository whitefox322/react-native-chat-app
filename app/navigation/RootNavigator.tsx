import { StackNavigator } from 'react-navigation';

import screens from '../constants/screens';
import { InitialScreen, ChatsScreen, ChatScreen, UserScreen } from '../screens';

const Routes = {
	[screens.InitialSetup]: {
		screen: StackNavigator({
			initial: { screen: InitialScreen }
		})
	},
	[screens.App]: {
		screen: StackNavigator({
			initial: { screen: ChatsScreen },
			[screens.Chat]: { screen: ChatScreen },
			[screens.User]: { screen: UserScreen }
		})
	}
};

export default StackNavigator(Routes, { headerMode: 'none' });
