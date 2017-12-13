import { combineReducers } from 'redux';

import events from './events'
import users from './users'

const appReducers = combineReducers({
	events: events(),
	users: users(),
});

const rootReducer = (state, action) => appReducers(state, action)

export default rootReducer;