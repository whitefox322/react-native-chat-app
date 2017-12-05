import React from 'react';
import {
	View,
	Text
} from 'react-native';

import { UserItem } from '../../components';
import { headerStyle, headerTitleStyle } from '../../styles';
import s from './styles';

interface InitialScreenProps {
	users: Array<{
		id: string;
		name: string;
		icon: any;
	}>;
	setChosenUser: (id: string) => void;
}

const InitialScreen: any = (props: InitialScreenProps) => {
	const { id, name, icon } = props.user;

	return (
		<View style={s.container}>
			<Text style={s.text}>
				Choose a test user
			</Text>
			<View>
				<UserItem
					id={id}
					name={name}
					icon={icon}
					chooseUser={props.setChosenUser}
				/>
			</View>
			<Text style={s.text}>
				or login via Facebook
			</Text>
		</View>
	);
};

InitialScreen.navigationOptions = {
	title: 'Authorization',
	...headerTitleStyle,
	...headerStyle
};

export default InitialScreen;
