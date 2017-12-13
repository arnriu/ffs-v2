import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Events from './Events';
import Live from './Live';

export const paths = [
	{
		name: "home",
		label: "",
		path: "/",
		linkPath: "/",
		component: Home,
		exact: true
	},
	{
		name: "live",
		label: "label.livePage",
		path: "/live",
		linkPath: "/live",
		component: Live,
		exact: true
	},
	{
		name: "events",
		label: "label.eventListPage",
		path: "/events/:event?",
		linkPath: "/events",
		component: Events,
		exact: false
	}
]

const Views = () => (
	<Switch>
		{paths.map((i, index) => (
			<Route key={index} {...i} />
		))}
	</Switch>
);

export default withRouter(Views);