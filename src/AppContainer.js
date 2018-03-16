import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import Header from './components/header';
import Views from './views';

const AppContainer = () => (
	<Fragment>
		<Header />
		<Container fluid>
			<Views />
		</Container>
	</Fragment>
);

export default AppContainer;
