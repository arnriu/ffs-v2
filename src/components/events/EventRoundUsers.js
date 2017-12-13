import React from 'react';
import PropTypes from 'prop-types'
import { translate } from 'react-i18next';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const EventRoundUsers = ({t, eventRoundUsers, usersList}) => (
	<BootstrapTable
        data={eventRoundUsers.map(i => usersList[i])}
        striped
    >
        <TableHeaderColumn dataField="twitchId" isKey hidden>Twitch Id</TableHeaderColumn>
        <TableHeaderColumn dataField="logo" dataFormat={(c, r) => <img src={c} alt={r.username + ' logo'} />}>Logo</TableHeaderColumn>
        <TableHeaderColumn dataField="username" dataFormat={(c, r) => <a href={r.url}>{c}</a> } dataSort filter={{type: 'TextFilter', delay: 50}}>Pseudo</TableHeaderColumn>
        <TableHeaderColumn dataField="followers" dataSort>Followers</TableHeaderColumn>
        <TableHeaderColumn dataField="views" dataSort>Views</TableHeaderColumn>
        
    </BootstrapTable>
)

EventRoundUsers.propTypes = {
	eventRoundUsers: PropTypes.array.isRequired,
	usersList: PropTypes.object.isRequired
};

export default translate()(EventRoundUsers);