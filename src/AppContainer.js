import React from 'react';
import { Container } from 'reactstrap';

import Header from './components/header';
import Views from './views';

const AppContainer = () => (
	<Container fluid>
		<Header />
		<Views />
	</Container>
);

export default AppContainer;
