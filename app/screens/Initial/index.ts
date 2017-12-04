import { connect } from 'react-redux';

import InitialScreen from './InitialScreen';

const mapStateToProps = state => ({
	users: state.app.initialUsers,
});

export default connect(mapStateToProps)(InitialScreen);
