import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import EventRoundDetails from './EventRoundDetails'
import EventRoundUsers from './EventRoundUsers'

import * as actions from '../../actions/events';
import { getEventRound, getEventRoundUsersValidated, getEventRoundUsersWaiting } from '../../reducers/events';
import { getUsersList } from '../../reducers/users';

class EventRound extends Component{
	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const { fetchEventRound, fetchEventRoundUsers, match } = this.props;
		fetchEventRound(match.params.path);
		fetchEventRoundUsers(match.params.path);
	}

	render(){
		const {t, eventRound, eventRoundUsersValidated, eventRoundUsersWaiting, usersList} = this.props

		return(
			<div>
				<Row>
					<Col>
						<h3 className='website-title'>
			                {t('website.detailEvent')}
			            </h3>
					</Col>
				</Row>

				<Row>
					<Col>
						<EventRoundDetails eventRound={eventRound} />
					</Col>
				</Row>

				<Row>
					<Col>
						<h3 className='website-title'>
			                {t('label.users') + '(' + (eventRoundUsersValidated.length + eventRoundUsersWaiting.length) + ')'}
			            </h3>
					</Col>
				</Row>

				<Row>
					<Col>
						<h3 className='website-title'>
			                {t('label.validated') + '(' + eventRoundUsersValidated.length + ')'}
			            </h3>
					</Col>
				</Row>

				<Row>
					<Col>
						<EventRoundUsers eventRoundUsers={eventRoundUsersValidated} usersList={usersList} />
					</Col>
				</Row>

				<Row>
					<Col>
						<h3 className='website-title'>
			                {t('label.waitingValidation') + '(' + eventRoundUsersWaiting.length + ')'}
			            </h3>
					</Col>
				</Row>

				<Row>
					<Col>
						<EventRoundUsers eventRoundUsers={eventRoundUsersWaiting} usersList={usersList} />
					</Col>
				</Row>
			</div>
		)
	}
}

const mapStateToProps = (state, {match}) => ({
	eventRound: getEventRound(state, match.params.path),
	eventRoundUsersValidated: getEventRoundUsersValidated(state, match.params.path),
	eventRoundUsersWaiting: getEventRoundUsersWaiting(state, match.params.path),
	usersList: getUsersList(state)
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
	usersList: PropTypes.object.isRequired
};

EventRound = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventRound);

export default translate()(withRouter(EventRound));