import React from 'react';
import {compose, withProps, withHandlers} from "recompose";
import {Text, Image, TouchableOpacity} from 'react-native';

import s from './styles';
import {styles} from '../../styles';

interface IUserItemProps {
    id: string;
    name: string;
    icon: any;
    chooseUser: (id: string) => void;
}

const UserItem = (props: IUserItemProps) => {
    const {id, name, icon, chooseUser} = props;

    return (
        <TouchableOpacity style={[s.root, styles.withVerticalMargin]} onPress={() => chooseUser(id)}>
            <Image
                style={[s.image, styles.withMarginRight]}
                source={icon}
            />
            <Text style={s.text}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};

const enhance = compose(
    withProps(props => ({
        id: props.id,
        name: props.name,
        icon: props.icon,
        chooseUser: props.chooseUser
    })),
    withHandlers({
        chooseUser: props => id => {
           props.chooseUser(id);
        }
    })
);

export default enhance(UserItem);
