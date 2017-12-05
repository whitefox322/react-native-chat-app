import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white
	},
	empty: {
		fontSize: fontSizes.huge,
		color: colors.black,
		alignSelf: 'center',
		lineHeight: 50
	},
	modal: {
		backgroundColor: colors.white,
		padding: 16,
		borderRadius: 8
	}
});

export default styles;
