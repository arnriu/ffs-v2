import React from 'react';
import { Route } from 'react-router-dom';

import AppContainer from './AppContainer';

const App = ({ loggedIn }) => (
	<div className={window.location.hostname.split('-')[0]}>
		<Route path="/:path?" render={() => (
			<AppContainer />
		)} />
	</div>
);

export default App;
