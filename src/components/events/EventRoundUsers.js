import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { translate } from 'react-i18next';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

import { getUsersListByIds } from '../../reducers/users'

const EventRoundUsers = ({t, eventRoundUsers, usersList}) => (
	<BootstrapTable
        data={usersList}
        bordered={false}
        className="border-0"
    >
        <TableHeaderColumn
            dataField="twitchId"
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
                <div className="rounded-circle user-logo bg-dark">
                    <img className="img-fluid" src={c} alt={r.username + ' logo'} />
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
        <TableHeaderColumn
            className="align-top text-secondary font-weight-normal font-italic"
            width="7rem"
            tdAttr={{ 'className': 'border-bottom'}}
            dataField="followers"
            dataSort
        >
            Followers
        </TableHeaderColumn>
        <TableHeaderColumn
            className="align-top text-secondary font-weight-normal font-italic"
            width="7rem"
            tdAttr={{ 'className': 'border-bottom'}}
            dataField="views"
            dataSort
        >
            Views
        </TableHeaderColumn>
    </BootstrapTable>
)

const mapStateToProps = (state, {eventRoundUsers}) => ({
    usersList: getUsersListByIds(state, eventRoundUsers)
});

EventRoundUsers.propTypes = {
	eventRoundUsers: PropTypes.array.isRequired,
	usersList: PropTypes.array.isRequired
};

export default translate()(connect(mapStateToProps)(EventRoundUsers));