import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {Font, AppLoading} from 'expo';
import {withHandlers} from 'recompose';
import {persistStore} from 'redux-persist';

import {appOperations} from '../modules/app';
import Navigator from './RootNavigator';
import store from '../store';

const NavigatorView = ({
                           dispatch,
                           navigator,
                           isReady,
                           asyncJob,
                           finishJob,
                           jobError,
                       }) => (
    isReady ? (
        <Navigator navigation={addNavigationHelpers({dispatch, state: navigator})}/>
    ) : (
        <AppLoading
            startAsync={asyncJob}
            onFinish={finishJob}
            onError={jobError}
        />
    )
);

const createPersist = () => new Promise((res) => {
    persistStore(store, {}, res);
    // persist.purge();
});

const enhance = withHandlers({
    asyncJob: () => async () => {
        await Promise.all([
            Font.loadAsync({
            	'work-sans': require('../assets/fonts/WorkSans.ttf'),
            	'acme': require('../assets/fonts/Acme.ttf')
            }),
            createPersist()
        ]);

        store.dispatch(appOperations.initialize());
    },
    finishJob: props => () => props.dispatch(appOperations.imagesLoaded(true)),
    jobError: props => error => {
        console.warn(error);
        props.dispatch(appOperations.imagesLoaded(true));
    },
});

export default enhance(NavigatorView);
