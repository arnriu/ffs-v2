import React from 'react';
import PropTypes from 'prop-types'
import { translate } from 'react-i18next';
import { Row, Col } from 'reactstrap';

const EventRoundDetails = ({t, eventRound}) => (
	<Row className="mb-5">
		<Col md="6" xl="4" className="py-2">
			<strong className="text-secondary">{t('event.name')}:</strong> {eventRound.name}
		</Col>
		<Col md="6" xl="4" className="py-2">
			<strong className="text-secondary">{t('event.description')}:</strong> {eventRound.description}
		</Col>
		<Col md="6" xl="4" className="py-2">
			<strong className="text-secondary">{t('event.status')}:</strong> {eventRound.status}
		</Col>
		<Col md="6" xl="4" className="py-2">
			<strong className="text-secondary">{t('event.reservedToAffiliates')}:</strong> {eventRound.reservedToAffiliates ? "Oui": "Non"}
		</Col>
		<Col md="6" xl="4" className="py-2">
			<strong className="text-secondary">{t('event.reservedToPartners')}:</strong> {eventRound.reservedToPartners ? "Oui": "Non"}
		</Col>
		<Col md="6" xl="4" className="py-2">
			<strong className="text-secondary">{t('event.minimumViews')}:</strong> {eventRound.minimumViews}
		</Col>
		<Col md="6" xl="4" className="py-2">
			<strong className="text-secondary">{t('event.minimumFollowers')}:</strong> {eventRound.minimumFollowers}
		</Col>
		<Col md="6" xl="4" className="py-2">
			<strong className="text-secondary">{t('event.current')}:</strong> {eventRound.current ? "Oui": "Non"}
		</Col>
	</Row>
)

EventRoundDetails.propTypes = {
	eventRound: PropTypes.object.isRequired
};

export default translate()(EventRoundDetails);