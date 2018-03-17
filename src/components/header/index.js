import React from 'react';
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap';

import { paths } from '../../views'
import logo from '../../images/logo_small.png'

const Header = ({t}) => (
	<Navbar tag="header">
		<h1>
			<Link to={paths.filter(i => i.name === "home")[0].linkPath} className="navbar-brand">
				<img className="img-fluid" src={logo} alt="Fight For Sub's logo" title="Fight For Sub's logo" />
			</Link>
		</h1>
		<Nav className="ml-auto main-menu">
			{paths.map((i, index) => (i.label && 
				<NavItem key={index}>
					<Link to={i.linkPath} className="nav-link">{t(i.label)}</Link>
				</NavItem>
			))}
		</Nav>
	</Navbar>	
);

export default translate()(Header);