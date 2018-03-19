import { normalize } from 'normalizr';

import * as api from '../api/events.js';
import * as schema from './schema';

export const fetchEventsList = () => (dispatch) => {
	return api.fetchEventsList().then(
		response => {
			response.json().then(response => 
				dispatch({
					type: 'FETCH_EVENTS_LIST_SUCCESS',
					response: normalize(response, schema.eventsList)
				})
			)
		},
		error => {
			dispatch({
				type: 'FETCH_EVENTS_LIST_FAILURE',
				message: error.message || 'Something went wrong.',
			});
		}
	);
}

export const fetchEventRound = (id) => (dispatch) => {
	return api.fetchEventRound(id).then(
		response => {
			response.json().then(response => 
				dispatch({
					type: 'FETCH_EVENT_ROUND_SUCCESS',
					id,
					response
				})
			)
		},
		error => {
			dispatch({
				type: 'FETCH_EVENTS_LIST_FAILURE',
				message: error.message || 'Something went wrong.',
			});
		}
	);
}

export const fetchEventRoundUsers = (id) => (dispatch) => {
	return api.fetchEventRoundUsers(id).then(
		response => {
			response.json().then(response => 
				dispatch({
					type: 'FETCH_EVENT_ROUND_USERS_SUCCESS',
					id,
					response: normalize(response, schema.usersList)
				})
			)
		},
		error => {
			dispatch({
				type: 'FETCH_EVENTS_LIST_FAILURE',
				message: error.message || 'Something went wrong.',
			});
		}
	);
}

export const fetchEventLive = (id) => (dispatch) => {
	return api.fetchEventLive().then(
		response => {
			if (!response.ok) {
	            return dispatch({
					type: 'FETCH_EVENT_LIVE_FAILURE',
					message: response.statusText || 'Something went wrong.',
				});
	        }
			response.json().then(response => 
				dispatch({
					type: 'FETCH_EVENT_LIVE_SUCCESS',
					response
				})
			)
		},
		error => {
			dispatch({
				type: 'FETCH_EVENT_LIVE_FAILURE',
				message: error.message || 'Something went wrong.',
			});
		}
	);
}