import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import EventsList from '../components/events/EventsList'
import EventRound from '../components/events/EventRound'

const Events = () => (
	<Switch>
		<Route path="/events" exact component={EventsList} />
		<Route path="/events/:path" component={EventRound} />
	</Switch>
);

export default withRouter(Events);