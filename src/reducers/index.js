import { combineReducers } from 'redux';

import events from './events'
import users from './users'
import results from './results'
import paths from './paths'

const appReducers = combineReducers({
	events: events(),
	users: users(),
	results: results(),
	paths
});

const rootReducer = (state, action) => appReducers(state, action)

export default rootReducer;