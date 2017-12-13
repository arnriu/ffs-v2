import { combineReducers } from 'redux';

const users = () => {
	const usersList = (state = {}, action) => {
		switch (action.type) {
			case 'FETCH_EVENT_ROUND_USERS_SUCCESS':
				let newState = {}
				action.response.result.map(i => {const {status, ...rest} = action.response.entities.user[i]; return newState[i] = rest})
				return {...state, ...newState};
			default:
				return state;
		}
	};

	const usersIds = (state = [], action) => {
		switch (action.type) {
			case 'FETCH_EVENT_ROUND_USERS_SUCCESS':
				return [...state, ...action.response.result];
			default:
				return state;
		}
	};

	return combineReducers({
		usersList,
		usersIds
	});
};

export default users;

export const getUsersList = (state) => state.users.usersList
export const getUsersIds = (state) => state.users.usersIds