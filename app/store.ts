import { createStore, applyMiddleware } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import appReducer from './modules';

let store = null;

const config = {
	key: 'root',
	storage,
	whitelist: ['initial']
};

const reducer = persistCombineReducers(config, appReducer);

if (__DEV__) {
	store = createStore(
		reducer,
		{},
		composeWithDevTools(
			applyMiddleware(thunk),
		),
	);
} else {
	store = createStore(
		reducer,
		{},
		applyMiddleware(thunk),
	);
}

export default store;
