import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import Results from '../components/results'

const ResultsView = () => (
	<Route path="/results/:id" component={Results} />
);

export default withRouter(ResultsView);