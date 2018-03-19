import { combineReducers } from 'redux';

const users = () => {
	const usersList = (state = {}, action) => {
		let newState = {}
		switch (action.type) {
			case 'FETCH_EVENT_ROUND_USERS_SUCCESS':
				action.response.result.map(i => {const {status, ...rest} = action.response.entities.user[i]; return newState[i] = rest})
				return {...state, ...newState};
			case 'FETCH_RESULTS_ROUND_SUCCESS':
				action.response.map(i =>
					{
						const {score, id, ...rest} = i;
						return newState[i.id] = {...state[i.id], twitchId: i.id, ...rest}
					}
				)
				return {...state, ...newState}
			default:
				return state;
		}
	};

	const usersIds = (state = [], action) => {
		switch (action.type) {
			case 'FETCH_EVENT_ROUND_USERS_SUCCESS':
				return [...state, ...action.response.result];
			case 'FETCH_RESULTS_ROUND_SUCCESS':
				return [...new Set([...state, ...action.response.map(i => i.id)])]
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
export const getUsersListByIds = (state, ids) => ids.map(i => state.users.usersList[i])
export const getUsersIds = (state) => state.users.usersIds