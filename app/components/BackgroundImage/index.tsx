import React from 'react';
import { compose, withProps } from 'recompose';
import { ImageBackground } from 'react-native';

import s from './styles';

interface IBackgroundImageProps {
	image: string;
}

const BackgroundImage = (props: IBackgroundImageProps) => {
	const source = require(`../../assets/icons/chatsBg.jpg`);

	return (
		<ImageBackground
			style={s.image}
			source={source}
		>
			{props.children}
		</ImageBackground>
	);
};

const enhance = compose(
	withProps(props => ({
		image: props.image
	}))
);

export default enhance(BackgroundImage);
