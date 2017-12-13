import React from 'react';
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Row, Col, Nav, NavItem,  Button } from 'reactstrap';

import { paths } from '../../views'
import logo from '../../images/logo_small.png'

const Sidebar = ({t}) => (
	<div>
		<header>
			<Row>
				<Col className="text-center">
					<Link to={paths.filter(i => i.name === "home")[0].linkPath}>
						<img src={logo} alt="Fight For Sub's logo" title="Fight For Sub's logo" />
					</Link>
				</Col>
			</Row>
			<Row>
				<Col className="text-center">
					<Button>Se connecter</Button>
				</Col>
			</Row>
		</header>
		<Nav vertical>
			{paths.map((i, index) => (i.label && 
				<NavItem key={index}>
					<Link to={i.linkPath}>{t(i.label)}</Link>
				</NavItem>
			))}
		</Nav>
		<footer>
			<ul>
                <li>
                    <a href='https://github.com/FightForSub' title={t('global.sidemenu.labels.github')}>
                        <i className='fa fa-github' />
                        {t('global.sidemenu.buttons.github')}
                    </a>
                </li>
                <li>
                    <a href='https://status.unexpected-studio.com/' title={t('global.sidemenu.labels.status')}>
                        {t('global.sidemenu.buttons.status')}
                    </a>
                </li>
            </ul>
		</footer>
	</div>
);

export default translate()(Sidebar);