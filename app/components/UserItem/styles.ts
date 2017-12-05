import { StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../styles';
import { indent } from '../../styles/dimensions';

const styles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: colors.black,
		padding: indent,
		backgroundColor: colors.white
	},
	image: {
		height: 40,
		width: 40
	},
	text: {
		fontFamily: 'work-sans',
		fontSize: fontSizes.medium,
		fontWeight: '700'
	}
});

export default styles;
