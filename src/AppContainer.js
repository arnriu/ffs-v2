import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import Header from './components/header';
import Footer from './components/footer';
import Views from './views';

const AppContainer = () => (
	<Fragment>
		<Header />
		<Container fluid>
			<Views />
		</Container>
		<Footer />
	</Fragment>
);

export default AppContainer;
