import { apiUrl } from './apiConf';

export const fetchResults = (id) => {
	const url = apiUrl + 'event/' + id + '/rounds'

	return fetch(url)
}

export const fetchResultsRound = (eventId, roundId) => {
	const url = apiUrl + 'event/' + eventId + '/round/' + roundId

	return fetch(url)
}
