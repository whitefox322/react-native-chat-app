import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';
import { doubleIndent } from "../../styles/dimensions";

const styles = StyleSheet.create({
	container: {
		padding: doubleIndent,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: 'acme',
		fontSize: fontSizes.big,
		color: colors.black
	}
});

export default styles;
