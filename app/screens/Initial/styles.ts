import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';
import { indent, doubleIndent } from '../../styles/dimensions';

const styles = StyleSheet.create({
	container: {
		padding: doubleIndent,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.bg
	},
	text: {
		fontFamily: 'acme',
		fontSize: fontSizes.big,
		color: colors.black,
		paddingBottom: indent
	}
});

export default styles;
