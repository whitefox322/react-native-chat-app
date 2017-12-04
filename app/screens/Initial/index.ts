import {connect} from 'react-redux';
import {compose, withHandlers, hoistStatics} from 'recompose';

import { appOperations } from '../../modules/app';
import InitialScreen from './InitialScreen';

const setChosenUser = ({dispatch}) => async (id) => {
    await dispatch(appOperations.userChosen(id));

    dispatch(appOperations.initialize());
};

const mapStateToProps = state => ({
    users: state.app.initialUsers,
});

const enhance = compose(
    connect(mapStateToProps),
    withHandlers({
        setChosenUser
    })
);

export default hoistStatics(enhance)(InitialScreen);
