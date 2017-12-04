import { StackNavigator } from 'react-navigation';

import screens from '../constants/screens';
import { InitialScreen } from '../screens';
import AppNavigator from './AppNavigator';


const Routes = {
	[screens.InitialSetup]: {
		screen: StackNavigator({
			initial: { screen: InitialScreen }
		})
	},
	[screens.App]: { screen: AppNavigator	}
};

export default StackNavigator(Routes, { headerMode: 'none' });
