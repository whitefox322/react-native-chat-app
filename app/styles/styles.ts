import { StyleSheet } from 'react-native';
import { indent, doubleIndent } from './dimensions';

const styles = StyleSheet.create({
	container: {
		paddingLeft: doubleIndent,
		paddingRight: doubleIndent,
	},
	fillAll: {
		flex: 1,
	},
	withMarginBottom: {
		marginBottom: indent,
	},
	withMarginTop: {
		marginTop: indent,
	},
	withMarginLeft: {
		marginRight: indent,
	},
	withMarginRight: {
		marginRight: indent,
	},
	withPaddingLeft: {
		paddingLeft: indent,
	},
	withPaddingRight: {
		paddingRight: indent,
	},
	withVerticalMargin: {
		marginTop: indent,
		marginBottom: indent,
	},
	withVerticalPadding: {
		paddingTop: indent,
		paddingBottom: indent,
	},
	withHorizontalPadding: {
		paddingRight: indent,
		paddingLeft: indent,
	},
	withHorizontalMargin: {
		marginRight: indent,
		marginLeft: indent,
	},
	withoutMargins: {
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
	}
});

export default styles;
