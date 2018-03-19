import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import EventsList from '../components/events/EventsList'
import EventRound from '../components/events/EventRound'

const EventsView = () => (
	<Switch>
		<Route path="/events" exact component={EventsList} />
		<Route path="/events/:id" component={EventRound} />
	</Switch>
);

export default withRouter(EventsView);