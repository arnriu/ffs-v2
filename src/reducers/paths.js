import HomeView from '../views/HomeView';
import EventsView from '../views/EventsView';
import LiveView from '../views/LiveView';
import ResultsView from '../views/ResultsView';

const initPaths = {
	home: {
		name: "home",
		label: "",
		path: "/",
		linkPath: "/",
		component: HomeView,
		exact: true
	},
	live: {
		name: "live",
		//label: "label.livePage",
		path: "/live",
		linkPath: "/live",
		component: LiveView,
		exact: true
	},
	events: {
		name: "events",
		label: "label.eventListPage",
		path: "/events/:event?",
		linkPath: "/events",
		component: EventsView,
		exact: false
	},
	results: {
		name: "results",
		path: "/results/:event?",
		linkPath: "/results",
		component: ResultsView,
		exact: false
	}
}

const paths = (state = initPaths, action) => {
	let newState = {}
	switch(action.type) {
		case 'FETCH_EVENT_LIVE_SUCCESS':
			newState = {...state}
			newState.live = {
				name: "live",
				label:  "label.livePage",
				path: "/results/:event?",
				linkPath: "/results/" + action.response.id,
				component: ResultsView,
				exact: false
			}
			return newState
		case 'FETCH_EVENT_LIVE_FAILURE':
			newState = {...state}
			newState.live = {
				name: "live",
				path: "/live",
				linkPath: "/live",
				component: LiveView,
				exact: true
			}
			return newState
		default:
			return state
	}
};


export default paths;

export const getPaths = (state) => state.paths
