import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom';

import * as actions from '../actions/events'
import { getPaths } from '../reducers/paths'

class Views extends Component{
	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const { fetchEventLive } = this.props
		fetchEventLive()
	}

	render(){
		const { paths } = this.props
		return(
			<Switch>
				{Object.keys(paths).map((i, index) => (
					<Route key={index} {...paths[i]} />
				))}
			</Switch>
		)
	}
}

const mapStateToProps = (state) => ({
	paths: getPaths(state)
});

const mapDispatchToProps = (dispatch) => ({
	fetchEventLive(){
		dispatch(actions.fetchEventLive());
	},
})

Views = connect(
	mapStateToProps,
	mapDispatchToProps
)(Views);

export default withRouter(Views);