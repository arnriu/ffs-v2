import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SideBar from './components/sidebar';
import Views from './views';

const AppContainer = () => (
	<Container fluid>
		<Row>
			<Col className="sidebar-col" tag="aside">
				<SideBar />
			</Col>
			<Col className="main-col">
				<Row>
					<Col>
						<Views />
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>
);

export default AppContainer;
