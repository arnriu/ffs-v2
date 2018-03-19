import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { withRouter } from 'react-router-dom'

import EventRoundDetails from './EventRoundDetails'
import EventRoundUsers from './EventRoundUsers'

import * as actions from '../../actions/events'
import { getEventRound, getEventRoundUsersValidated, getEventRoundUsersWaiting } from '../../reducers/events'

class EventRound extends Component{
	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const { fetchEventRound, fetchEventRoundUsers, match } = this.props
		fetchEventRound(match.params.id)
		fetchEventRoundUsers(match.params.id)
	}

	render(){
		const {t, eventRound, eventRoundUsersValidated, eventRoundUsersWaiting } = this.props

		return(
			<main>
				<section>
					<h2>
		                {t('website.detailEvent')}
		            </h2>
					<EventRoundDetails eventRound={eventRound} />
				</section>

				<section>
					<h2 className="mt-5">
		                {t('label.users') + '(' + (eventRoundUsersValidated.length + eventRoundUsersWaiting.length) + ')'}
		            </h2>

					<h3>
		                {t('label.validated') + '(' + eventRoundUsersValidated.length + ')'}
		            </h3>
					<EventRoundUsers eventRoundUsers={eventRoundUsersValidated} />
					
					<h3 className="mt-5">
		                {t('label.waitingValidation') + '(' + eventRoundUsersWaiting.length + ')'}
		            </h3>
					<EventRoundUsers eventRoundUsers={eventRoundUsersWaiting} />
				</section>
			</main>
		)
	}
}

const mapStateToProps = (state, {match}) => ({
	eventRound: getEventRound(state, match.params.id),
	eventRoundUsersValidated: getEventRoundUsersValidated(state, match.params.id),
	eventRoundUsersWaiting: getEventRoundUsersWaiting(state, match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
	fetchEventRound(id){
		dispatch(actions.fetchEventRound(id));
	},
	fetchEventRoundUsers(id){
		dispatch(actions.fetchEventRoundUsers(id));	
	}
})

EventRound.propTypes = {
	fetchEventRound: PropTypes.func.isRequired,
	fetchEventRoundUsers: PropTypes.func.isRequired,
	eventRound: PropTypes.object.isRequired,
	eventRoundUsersValidated: PropTypes.array.isRequired,
	eventRoundUsersWaiting: PropTypes.array.isRequired,
};

EventRound = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventRound);

export default translate()(withRouter(EventRound));