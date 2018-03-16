import React from 'react';
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Row, Col, Navbar, Nav, NavItem, NavLink, Button } from 'reactstrap';

import { paths } from '../../views'
import logo from '../../images/logo_small.png'

const Header = ({t}) => (
	<Navbar>
		<h1>
			<Link to={paths.filter(i => i.name === "home")[0].linkPath} className="navbar-brand">
				<img src={logo} alt="Fight For Sub's logo" title="Fight For Sub's logo" />
			</Link>
		</h1>
		<Button>Se connecter</Button>
		<div className="ml-auto">
			<Row>
				<Col>
					<Nav className="justify-content-end">
						{paths.map((i, index) => (i.label && 
							<NavItem key={index}>
								<Link to={i.linkPath} className="nav-link">{t(i.label)}</Link>
							</NavItem>
						))}
					</Nav>
				</Col>
			</Row>
			<Row>
				<Col>
					<Nav className="justify-content-end">
			            <NavItem>
			                <NavLink href='https://github.com/FightForSub' title={t('global.sidemenu.labels.github')}>
			                    <i className='fa fa-github' />
			                    {t('global.sidemenu.buttons.github')}
			                </NavLink>
			            </NavItem>
			            <NavItem>
			                <NavLink href='https://status.unexpected-studio.com/' title={t('global.sidemenu.labels.status')}>
			                    {t('global.sidemenu.buttons.status')}
			                </NavLink>
			            </NavItem>
			        </Nav>
				</Col>
			</Row>
		</div>
	</Navbar>	
);

export default translate()(Header);