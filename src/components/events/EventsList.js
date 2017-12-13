import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Row, Col } from 'reactstrap'

import EventsListTable from './EventsListTable'

import * as actions from '../../actions/events';
import { getEventsList, getEventsIds } from '../../reducers/events';

class EventsList extends Component{
	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const { fetchEventsList } = this.props;
		fetchEventsList();
	}

	render(){
		const {t, eventsList, eventsIds} = this.props

		return(
			<div>
				<Row>
					<Col>
						<h3 className='website-title'>
			                {t('label.events')}
			            </h3>
					</Col>
				</Row>

                <Row>
                	<Col>
                		{eventsList && <EventsListTable eventsList={eventsList} eventsIds={eventsIds} />}
	            		{!eventsList && <div>NoEvents</div>}
	            	</Col>
	            </Row>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	eventsList: getEventsList(state),
	eventsIds: getEventsIds(state)
});

const mapDispatchToProps = (dispatch) => ({
	fetchEventsList(){
		dispatch(actions.fetchEventsList());
	}
})

EventsList.propTypes = {
	fetchEventsList: PropTypes.func.isRequired,
	eventsList: PropTypes.object.isRequired,
	eventsIds: PropTypes.array.isRequired
};

EventsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventsList);

export default translate()(EventsList);