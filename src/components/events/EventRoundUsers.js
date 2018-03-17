import React from 'react';
import PropTypes from 'prop-types'
import { translate } from 'react-i18next';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const EventRoundUsers = ({t, eventRoundUsers, usersList}) => (
	<BootstrapTable
        data={eventRoundUsers.map(i => usersList[i])}
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
                <img className="img-fluid rounded-circle w-75" src={c}alt={r.username + ' logo'} />
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

EventRoundUsers.propTypes = {
	eventRoundUsers: PropTypes.array.isRequired,
	usersList: PropTypes.object.isRequired
};

export default translate()(EventRoundUsers);