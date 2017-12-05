import { connect } from 'react-redux';
import { compose, withHandlers, hoistStatics } from 'recompose';

import { appOperations } from '../../modules/app';
import { initialOperations } from '../../modules/initial';
import InitialScreen from './InitialScreen';

const setChosenUser = ({ dispatch }) => async (id) => {
	await dispatch(initialOperations.userChosen(id));

	dispatch(appOperations.initialize());
};

const mapStateToProps = state => ({
	user: state.initial.testUser
});

const enhance = compose(
	connect(mapStateToProps),
	withHandlers({
		setChosenUser
	})
);

export default hoistStatics(enhance)(InitialScreen);
