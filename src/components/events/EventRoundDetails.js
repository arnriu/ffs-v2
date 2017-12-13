import React from 'react';
import PropTypes from 'prop-types'
import { translate } from 'react-i18next';
import { Table } from 'reactstrap'

const EventRoundDetails = ({t, eventRound}) => (
	<div>
		<Table>
			<tbody>
				<tr>
					<td>{t('event.name')}</td>
					<td>{eventRound.name}</td>
				</tr>
				<tr>
					<td>{t('event.description')}</td>
					<td dangerouslySetInnerHTML={{__html: eventRound.description}} />
				</tr>
				<tr>
					<td>{t('event.status')}</td>
					<td>{eventRound.status}</td>
				</tr>
				<tr>
					<td>{t('event.reservedToAffiliates')}</td>
					<td>{eventRound.reservedToAffiliates ? "Oui": "Non"}</td>
				</tr>
				<tr>
					<td>{t('event.reservedToPartners')}</td>
					<td>{eventRound.reservedToPartners ? "Oui": "Non"}</td>
				</tr>
				<tr>
					<td>{t('event.minimumViews')}</td>
					<td>{eventRound.minimumViews}</td>
				</tr>
				<tr>
					<td>{t('event.minimumFollowers')}</td>
					<td>{eventRound.minimumFollowers}</td>
				</tr>
				<tr>
					<td>{t('event.current')}</td>
					<td>{eventRound.current ? "Oui": "Non"}</td>
				</tr>
			</tbody>
		</Table>
	</div>
)

EventRoundDetails.propTypes = {
	eventRound: PropTypes.object.isRequired
};

export default translate()(EventRoundDetails);