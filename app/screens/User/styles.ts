import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';
import { indent } from '../../styles/dimensions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bg,
		padding: indent
	},
	image: {
		alignSelf: 'center',
		width: 100,
		height: 100,
		marginTop: indent,
		marginBottom: indent
	},
	modalImage: {
		width: 200,
		height: 200
	},
	modalBlock: {
		backgroundColor: colors.white,
		padding: indent,
		borderRadius: 8
	},
	text: {
		alignSelf: 'center',
		fontFamily: 'acme',
		fontSize: fontSizes.huge,
		borderWidth: 2,
		borderColor: colors.green,
		color: colors.green,
		borderRadius: 20,
		padding: indent,
		marginTop: indent
	},
	modal: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default styles;
