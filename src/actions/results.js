import * as api from '../api/results.js';

export const fetchResults = (id) => (dispatch) => {
	return api.fetchResults(id).then(
		response => {
			response.json().then(response =>
				dispatch({
					type: 'FETCH_RESULTS_IDS_SUCCESS',
					id,
					response
				})
			)
		},
		error => {
			dispatch({
				type: 'FETCH_RESULTS_IDS_FAILURE',
				message: error.message || 'Something went wrong.',
			});
		}
	);
}


export const fetchResultsRound = (eventId, roundId) => (dispatch) => {
	return api.fetchResultsRound(eventId, roundId).then(
		response => {
			response.json().then(response =>
				dispatch({
					type: 'FETCH_RESULTS_ROUND_SUCCESS',
					id: roundId,
					response
				})
			)
		},
		error => {
			dispatch({
				type: 'FETCH_RESULTS_ROUND_FAILURE',
				message: error.message || 'Something went wrong.',
			});
		}
	);
}