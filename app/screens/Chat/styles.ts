import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

import { colors, fontSizes } from '../../styles';
import { indent } from '../../styles/dimensions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		padding: indent,
		backgroundColor: colors.bg
	},
	empty: {
		fontSize: fontSizes.big,
		color: colors.black,
		alignSelf: 'center',
		lineHeight: 30
	},
	messagesBlock: {
		flex: 12,
		justifyContent: 'flex-start',
		alignItems: 'stretch'
	},
	list: {
		backgroundColor: 'transparent'
	},
	inputBlock: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		paddingBottom: indent
	},
	icon: {
		color: colors.green
	},
	input: {
		height: 40,
		backgroundColor: colors.bg,
		borderWidth: 2,
		borderRadius: 20,
		borderColor: colors.green,
		paddingLeft: indent,
		paddingRight: indent,
		fontSize: fontSizes.small,
		width: width - 200
	},
	button: {
		width: 80,
		height: 40,
		borderRadius: 20,
		backgroundColor: colors.green,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnText: {
		fontFamily: 'acme',
		fontSize: fontSizes.medium,
		color: colors.white
	},
	image: {
		height: 40,
		width: 40
	}
});

export default styles;
