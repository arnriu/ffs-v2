import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { withRouter } from 'react-router-dom'

import EventRoundDetails from '../events/EventRoundDetails'
import ResultsRounds from './ResultsRounds'

import * as eventsActions from '../../actions/events';
import * as resultsActions from '../../actions/results';
import { getEventRound } from '../../reducers/events'
import { getRoundIds } from '../../reducers/results'

class Results extends Component{
	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const { fetchEventRound, fetchResults, match } = this.props;
		fetchEventRound(match.params.id)
		fetchResults(match.params.id);
	}

	render(){
		const {t, match, eventRound, roundIds} = this.props

		return(
			<main>
				<section>
					<h2>
		                {t('website.detailEvent')}
		            </h2>
					<EventRoundDetails eventRound={eventRound} />
				</section>
				<section>
					<h2>
						Classement
					</h2>
					{roundIds && <ResultsRounds eventId={match.params.id} roundIds={roundIds} />}
					{!roundIds && <p>Pas de classement</p>}
				</section>
			</main>
		)
	}
}

const mapStateToProps = (state, {match}) => ({
	eventRound: getEventRound(state, match.params.id),
	roundIds: getRoundIds(state, match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
	fetchEventRound(id){
		dispatch(eventsActions.fetchEventRound(id));
	},
	fetchResults(id){
		dispatch(resultsActions.fetchResults(id));
	}
})

Results.propTypes = {
	fetchEventRound: PropTypes.func.isRequired,
	fetchResults: PropTypes.func.isRequired,
	eventRound: PropTypes.object.isRequired,
	roundIds: PropTypes.array,
};

Results = connect(
	mapStateToProps,
	mapDispatchToProps
)(Results);

export default translate()(withRouter(Results))
