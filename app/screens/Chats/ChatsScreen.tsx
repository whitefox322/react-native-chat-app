import React from 'react';
import {
	View,
	Text,
	FlatList,
	Button
} from 'react-native';
import Modal from 'react-native-modal';
import R from 'ramda';

import { ListSeparator, ChatItem, BackgroundImage } from '../../components';
import { headerStyle, headerTitleStyle } from '../../styles';
import s from './styles';

interface IChatsProps {
	chats: Array<any>;
	lastMessage: {
		text: string;
		time: number;
	};
	status: string;
	showModal: boolean;
	toggleShowModal: () => void;
	removeChat: (id: string) => void;
	navigation: any;
}

const ChatsScreen: any = (props: IChatsProps) => {
	const { chats, lastMessage, status, navigation, showModal, toggleShowModal, removeChat } = props;

	return (
		<View>
			{
				chats.length === 0 ?
					<Text style={s.empty}>No chats yet</Text> :
					<FlatList
						style={s.container}
						data={chats}
						keyExtractor={R.prop('id')}
						ItemSeparatorComponent={() => (
							<ListSeparator/>
						)}
						ListFooterComponent={(<ListSeparator/>)}
						renderItem={({ item }) => <ChatItem
							onPress={() => navigation.navigate('Chat', { chat: item })}
							onLongPress={() => toggleShowModal(item.id)}
							lastMessage={lastMessage}
							status={status > item.lastVisit ? 'unread' : 'read'}
							{...item}/>
						}
					/>
			}

			<Modal
				isVisible={showModal}
				onBackdropPress={() => toggleShowModal(null)}
				onBackButtonPress={() => toggleShowModal(null)}
			>
				<View style={s.modal}>
					<Button title='Remove chat' onPress={removeChat}/>
				</View>
			</Modal>
		</View>
	);
};

ChatsScreen.navigationOptions = {
	title: 'Chats',
	...headerTitleStyle,
	...headerStyle
};

export default ChatsScreen;
