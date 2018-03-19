import { combineReducers } from 'redux';

const results = () => {
	const roundsIds = (state = {}, action) => {
		switch (action.type) {
			case 'FETCH_RESULTS_IDS_SUCCESS':
				let newState = {...state}
				newState[action.id] = action.response
				return newState
			default:
				return state;
		}
	}

	const roundsResults = (state = {}, action) => {
		switch (action.type) {
			case 'FETCH_RESULTS_ROUND_SUCCESS':
				let newState = {...state}
				newState[action.id] = action.response.map(i => ({id: i.id, score: i.score}))
				return newState
			default:
				return state;
		}
	}

	const roundUsers = (state = {}, action) => {
		switch (action.type) {
			case 'FETCH_RESULTS_ROUND_SUCCESS':
				let newState = {...state}
				newState[action.id] = action.response.map(i => i.id)
				return newState
			default:
				return state;
		}
	}

	return combineReducers({
		roundsIds,
		roundsResults,
		roundUsers
	});
};

export default results;

export const getRoundIds = (state, id) => state.results.roundsIds[id]
export const getRoundResults = (state, id) => state.results.roundsResults[id] || []
export const getRoundsUsers = (state, ids) => [...new Set([].concat.apply([], ids.map(id => state.results.roundUsers[id])))].filter(i => typeof i !== "undefined")
export const getUsersResults = (state, ids) => {
	const roundsUsers = getRoundsUsers(state, ids).map(i => ({id: i}))
	
	ids.map(id => getRoundResults(state, id).map(i => roundsUsers.find(j => j.id === i.id)["round"+id] = i.score))
	roundsUsers.map(i => i.total = Object.keys(i).filter(j => j.startsWith("round")).reduce((total, k) => total + parseFloat(i[k]), 0))
	return roundsUsers
}