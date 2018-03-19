import React from 'react';
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap';

import { getPaths } from '../../reducers/paths'
import logo from '../../images/logo_small.png'

const Header = ({t, paths}) => (
	<Navbar tag="header">
		<h1>
			<Link to={paths.home.linkPath} className="navbar-brand">
				<img className="img-fluid" src={logo} alt="Fight For Sub's logo" title="Fight For Sub's logo" />
			</Link>
		</h1>
		<Nav className="ml-auto main-menu">
			{Object.keys(paths).map((i, index) => (paths[i].label && 
				<NavItem key={index}>
					<Link to={paths[i].linkPath} className="nav-link">{t(paths[i].label)}</Link>
				</NavItem>
			))}
		</Nav>
	</Navbar>	
);

const mapStateToProps = (state) => ({
	paths: getPaths(state)
});

export default translate()(connect(mapStateToProps)(Header));