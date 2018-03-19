import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ResultsList from './ResultsList'

import * as actions from '../../actions/results';
import { getUsersResults, getRoundsUsers } from '../../reducers/results'

class ResultsRounds extends Component{
	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const { fetchResultsRound, eventId, roundIds } = this.props;
		roundIds && roundIds.map(id => fetchResultsRound(eventId, id))
	}

	render(){
		const { usersResults, roundsUsers, roundIds } = this.props

		return(
			<ResultsList usersResults={usersResults} roundsUsers={roundsUsers} roundIds={roundIds} />
		)
	}
}

const mapStateToProps = (state, {roundIds}) => ({
	usersResults: getUsersResults(state, roundIds),
	roundsUsers: getRoundsUsers(state, roundIds)
});

const mapDispatchToProps = (dispatch) => ({
	fetchResultsRound(eventId, id){
		dispatch(actions.fetchResultsRound(eventId, id));
	}
})

ResultsRounds.propTypes = {
	fetchResultsRound: PropTypes.func.isRequired,
	roundIds: PropTypes.array.isRequired,
	usersResults: PropTypes.array.isRequired,
	roundsUsers: PropTypes.array.isRequired,
};

ResultsRounds = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultsRounds);

export default ResultsRounds
