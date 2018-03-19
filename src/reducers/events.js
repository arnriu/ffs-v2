import { combineReducers } from 'redux';

const events = () => {
	const eventsList = (state = {}, action) => {
		switch (action.type) {
			case 'FETCH_EVENTS_LIST_SUCCESS':
				return action.response.entities.events;
			default:
				return state;
		}
	};

	const eventsIds = (state = [], action) => {
		switch (action.type) {
			case 'FETCH_EVENTS_LIST_SUCCESS':
				return action.response.result;
			default:
				return state;
		}
	};

	const eventRound = (state = {}, action) => {
		let newState = {}
		switch (action.type) {
			case 'FETCH_EVENTS_LIST_SUCCESS':
				newState = {...state};
				Object.keys(state).map(i => !action.response.result.includes(parseInt(i, 10)) && delete newState[i])
				return newState
			case 'FETCH_EVENT_ROUND_SUCCESS':
				newState = {...state};
				newState[action.id] = action.response
				return newState;
			default:
				return state
		}
	}

	const eventRoundUsersValidated = (state = {}, action) => {
		let newState = {}
		switch(action.type) {
			case 'FETCH_EVENTS_LIST_SUCCESS':
				newState = {...state};
				Object.keys(state).map(i => !action.response.result.includes(parseInt(i, 10)) && delete newState[i])
				return newState
			case 'FETCH_EVENT_ROUND_USERS_SUCCESS':
				newState = {...state}
				newState[action.id] = action.response.result.filter(i => action.response.entities.user[i].status === "VALIDATED")
				return newState
			default:
				return state
		}
	}

	const eventRoundUsersWaiting = (state = {}, action) => {
		let newState = {}
		switch(action.type) {
			case 'FETCH_EVENTS_LIST_SUCCESS':
				newState = {...state};
				Object.keys(state).map(i => !action.response.result.includes(parseInt(i, 10)) && delete newState[i])
				return newState
			case 'FETCH_EVENT_ROUND_USERS_SUCCESS':
				newState = {...state}
				newState[action.id] = action.response.result.filter(i => action.response.entities.user[i].status === "AWAITING_FOR_ADMIN_VALIDATION")
				return newState
			default:
				return state
		}
	}

	return combineReducers({
		eventsList,
		eventsIds,
		eventRound,
		eventRoundUsersValidated,
		eventRoundUsersWaiting,
	});
};

export default events;

export const getEventsList = (state) => state.events.eventsList
export const getEventsIds = (state) => state.events.eventsIds
export const getEventRound = (state, id) => state.events.eventRound[id] || {}
export const getEventRoundUsersValidated = (state, id) => state.events.eventRoundUsersValidated[id] || []
export const getEventRoundUsersWaiting = (state, id) => state.events.eventRoundUsersWaiting[id] || []