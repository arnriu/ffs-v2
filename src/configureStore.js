import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
	const middlewares = [thunk];
	const persistedState = loadState();
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger());
	}

	const store = createStore(
		rootReducer,
		persistedState,
		composeEnhancers(applyMiddleware(...middlewares))
	);

	store.subscribe(throttle(() => {
		saveState({
			events: store.getState().events,
			users: store.getState().users,
			results: store.getState().results
		});
	}, 1000));

	return store;
};

export default configureStore;
