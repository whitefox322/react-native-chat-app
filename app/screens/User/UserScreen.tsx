import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableWithoutFeedback
} from 'react-native';
import Modal from 'react-native-modal';

import { headerStyle, headerTitleStyle } from '../../styles';
import s from './styles';

interface IUserProps {
	navigation: any;
	showModal: boolean;
	toggleShowModal: () => void;
}

const UserScreen: any = (props: IUserProps) => {
	const user = props.navigation.state.params.user;
	const { showModal, toggleShowModal } = props;

	return (
		<View style={s.container}>
			<TouchableWithoutFeedback onPress={toggleShowModal}>
				<Image
					style={s.image}
					source={user.userIcon}
				/>
			</TouchableWithoutFeedback>
			<Text style={s.text}>
				{user.userName}
			</Text>
			<Modal
				isVisible={showModal}
				onBackdropPress={toggleShowModal}
				onBackButtonPress={toggleShowModal}
				style={s.modal}
			>
				<View style={s.modalBlock}>
					<Image
						style={s.modalImage}
						source={user.userIcon}
					/>
				</View>
			</Modal>
		</View>
);
};

UserScreen.navigationOptions = ({ navigation }) => ({
	title: navigation.state.params.user.userName,
	...headerTitleStyle,
	...headerStyle
});

export default UserScreen;
