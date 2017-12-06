import React, { Component } from 'react';
import {
	FlatList,
	View,
	Text,
	Image,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import R from 'ramda';

import { MessageItem, MessageSeparator } from '../../components';
import { styles, headerStyle, headerTitleStyle } from '../../styles';
import s from './styles';

interface IChatProps {
	messages: Array<any>;
	activeKeyboard: boolean;
	navigation: any;
	activeMessage: string;
	setMessage: () => void;
	sendMessage: (el: any) => void;
}

class ChatScreen extends Component<IChatProps, any> {
	componentDidMount () {
		this.flatList.scrollToEnd();
	}

	render () {
		const { messages, activeKeyboard, activeMessage, setMessage, sendMessage } = this.props;
		const chat = this.props.navigation.state.params.chat;
		const kbStyle = activeKeyboard ? { height: 75 } : { height: 0 };

		return (
			<KeyboardAvoidingView behavior='padding' style={s.container}>
				<View style={s.messagesBlock}>
					{
						messages.length === 0 ?
							<Text style={s.empty}>No messages yet</Text> :
							<FlatList
								ref={elm => this.flatList = elm}
								style={s.list}
								data={messages}
								keyExtractor={R.prop('id')}
								ListHeaderComponent={() => <MessageSeparator time={messages[0].time}/>}
								renderItem={({ item }) => <MessageItem
									messages={messages}
									user={chat.userID}
									{...item}
								/>
								}
							/>
					}
				</View>
				<View style={s.inputBlock}>
					<MaterialCommunityIcons
						name='folder-image'
						size={30}
						style={s.icon}
					/>
					<MaterialIcons
						name='photo-camera'
						size={30}
						style={s.icon}
					/>
					<TextInput
						style={s.input}
						placeholder='Message...'
						underlineColorAndroid='transparent'
						multiline={true}
						value={activeMessage}
						onChangeText={setMessage}
						onSubmitEditing={() => sendMessage(this.flatList)}
					/>
					<TouchableWithoutFeedback
						onPress={() => sendMessage(this.flatList)}
					>
						<View style={s.button}>
							<Text style={s.btnText}>
								Send
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={kbStyle}/>
			</KeyboardAvoidingView>
		);
	}
};

ChatScreen.navigationOptions = ({ navigation }) => ({
	title: navigation.state.params.chat.userName,
	headerRight:
		<TouchableWithoutFeedback
			onPress={() => navigation.navigate('User', { user: navigation.state.params.chat })}
		>
			<Image
				style={[s.image, styles.withMarginRight]}
				source={navigation.state.params.chat.userIcon}
			/>
		</TouchableWithoutFeedback>,
	...headerTitleStyle,
	...headerStyle
});

export default ChatScreen;
