import { compose, withState, withHandlers, hoistStatics } from 'recompose';

import UserScreen from './UserScreen';

const enhance = compose(
	withState('showModal', 'setShowModal', false),
	withHandlers({
		toggleShowModal: props => () => {
			props.setShowModal(!props.showModal);
		}
	})
);

export default hoistStatics(enhance)(UserScreen);
