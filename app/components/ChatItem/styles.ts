import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';
import { indent } from '../../styles/dimensions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: indent,
		alignItems: 'center',
		overflow: 'hidden',
		maxHeight: 80
	},
	message: {
		maxWidth: '40%',
		overflow: 'hidden',
		maxHeight: 60
	},
	text: {
		fontSize: fontSizes.small,
		color: colors.gray
	},
	image: {
		height: 40,
		width: 40
	},
	name: {
		fontFamily: 'acme',
		fontSize: fontSizes.medium,
		fontWeight: '700'
	},
	time: {
		fontSize: fontSizes.small,
		color: colors.gray,
		fontStyle: 'italic'
	},
	status: {
		fontSize: fontSizes.small,
		color: colors.red,
		fontStyle: 'italic'
	},
	unstatus: {
		fontSize: fontSizes.small,
		color: colors.green,
		fontStyle: 'italic'
	},
	empty: {
		fontSize: fontSizes.huge,
		color: colors.black,
		alignSelf: 'center',
		lineHeight: 50
	}
});

export default styles;
