import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

import { getUsersListByIds } from '../../reducers/users'

class ResultsList extends Component{
	constructor(props) {
		super(props);

		this.state = {
			formatedLines: []
		};
	}

	componentWillReceiveProps({usersResults, usersListByIds}){
		const winner = usersResults.reduce((i, j) => i.total > j.total ? i.id : j.id)
		this.setState({winner, formatedLines: usersResults.map(i => ({...i, ...usersListByIds.filter(j => j.twitchId === i.id)[0]}))})
	}

	render(){
		const { roundIds } = this.props

		return(
			<BootstrapTable
		        data={this.state.formatedLines}
		        bordered={false}
		        className="border-0"
		        options={{defaultSortName: 'total', defaultSortOrder: 'desc'}}
		    >
		        <TableHeaderColumn
		            dataField="id"
		            isKey
		            hidden
		        >
		            Twitch Id
		        </TableHeaderColumn>
		        <TableHeaderColumn
		            width="6rem"
		            className="align-top text-secondary font-weight-normal font-italic"
		            dataField="logo"
		            dataFormat={(c, r) =>
		                <div className={"rounded-circle user-logo bg-dark" + (r.id === this.state.winner ? " winner" : "")}>
		                    <img className="img-fluid" src={c}alt={r.username + ' logo'} />
		                </div>
		        }>
		        </TableHeaderColumn>
		        <TableHeaderColumn
		            className="align-top text-secondary font-weight-normal font-italic"
		            tdAttr={{ 'className': 'border-bottom align-middle'}}
		            dataField="username"
		            dataFormat={(c, r) =>
		                <div className="d-flex flex-column">
		                    <strong className="font-weight-normal">{c}</strong>
		                    <small><a href={r.url} target="_blank">{r.url.split('https://www.')[1]}</a></small>
		                </div>
		            }
		            dataSort
		            filter={{type: 'TextFilter', placeholder: 'Chercher...', delay: 50}}
		        >
		            Joueur
		        </TableHeaderColumn>

		        {roundIds.map((i, index) => 
		        	<TableHeaderColumn
		        		key={index}
			            className="align-top text-secondary font-weight-normal font-italic"
			            width="7rem"
			            tdAttr={{ 'className': 'border-bottom'}}
			            dataField={"round"+i}
			            dataSort
			        >
			            Round {index+1}
			        </TableHeaderColumn>
		        )}

		        <TableHeaderColumn
		            className="align-top text-secondary font-weight-normal font-italic"
		            width="7rem"
		            tdAttr={{ 'className': 'border-bottom'}}
		            dataField="total"
		            dataSort
		        >
		            Total
		        </TableHeaderColumn>
		    </BootstrapTable>
		)
	}
}

const mapStateToProps = (state, {roundsUsers}) => ({
	usersListByIds: getUsersListByIds(state, roundsUsers),
});

ResultsList.propTypes = {
	usersResults: PropTypes.array.isRequired,
	roundsUsers: PropTypes.array.isRequired,
	usersListByIds: PropTypes.array.isRequired,
	roundIds: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ResultsList)