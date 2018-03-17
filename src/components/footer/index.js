import React from 'react';
import { translate } from 'react-i18next'
import { Button } from 'reactstrap';

import kappa from '../../images/kappa.png'

const Footer = ({t}) => (
	<footer className="d-flex justify-content-between align-items-center">
		<Button color="info">
			<i className='fa fa-twitch' /> Connexion
		</Button>
		<p className="text-center m-0">
			Crafted with <i className="fa fa-heart text-danger"></i> and <img src={kappa} alt="Kappa" /> by some viewers for some viewers.
		</p>
        <a className="btn btn-outline-primary" href='https://github.com/FightForSub' target="_blank" title={t('global.sidemenu.labels.github')}>
            <i className='fa fa-github' /> {t('global.sidemenu.buttons.github')}
        </a>
	</footer>	
);

export default translate()(Footer);