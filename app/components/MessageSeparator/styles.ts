import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';
import { indent } from '../../styles/dimensions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.gray
	},
	time: {
		fontFamily: 'work-sans',
		fontSize: fontSizes.small,
		color: colors.gray
	}
});

export default styles;
