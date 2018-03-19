import { apiUrl } from './apiConf';

export const fetchEventsList = () => {
	const url = apiUrl + 'events'
	
	return fetch(url)
}

export const fetchEventRound = (id) => {
	const url = apiUrl + 'event/' + id
	
	return fetch(url)
}

export const fetchEventRoundUsers = (id) => {
	const url = apiUrl + 'event/' + id + '/users?'
	
	return fetch(url)
}

export const fetchEventLive = () => {
	const url = apiUrl + 'event/current'
	
	return fetch(url)
}