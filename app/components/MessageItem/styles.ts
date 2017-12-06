import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';
import { indent } from '../../styles/dimensions';

const styles = StyleSheet.create({
	container: {
		paddingTop: indent,
		paddingBottom: indent
	},
	message: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	right: {
		justifyContent: 'flex-end'
	},
	left: {
		justifyContent: 'flex-start'
	},
	textUser: {
		backgroundColor: colors.green,
		padding: indent,
		marginLeft: indent,
		fontFamily: 'acme',
		fontSize: fontSizes.small,
		color: colors.white,
		borderRadius: 10,
		maxWidth: '90%'
	},
	textFriend: {
		backgroundColor: colors.gray,
		padding: indent,
		marginRight: indent,
		fontFamily: 'acme',
		fontSize: fontSizes.small,
		color: colors.white,
		borderRadius: 10,
		maxWidth: '90%'
	},
	time: {
		fontFamily: 'acme',
		fontSize: fontSizes.small,
		color: colors.gray,
		fontStyle: 'italic'
	}
});

export default styles;
