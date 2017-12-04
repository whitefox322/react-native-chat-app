import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {UserItem} from '../../components';
import {headerStyle, headerTitleStyle} from '../../styles';
import s from './styles';

interface InitialScreenProps {
    users: Array<{
        id: string;
        name: string;
        icon: any;
        setChosenUser: (id: string) => void;
    }>;
}

const InitialScreen: any = (props: InitialScreenProps) => {
    const {users, setChosenUser} = props;

    return (
        <View style={s.container}>
            <Text style={s.text}>
                Choose a test user
            </Text>
            <View>
                {
                    users.map(user => {
                        const {id, name, icon} = user;
                        return (
                            <UserItem
                                key={id}
                                id={id}
                                name={name}
                                icon={icon}
								chooseUser={setChosenUser}
                            />
                        );
                    })
                }
            </View>
            <Text style={s.text}>
                or register via Facebook
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
