import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const EventsListTable = ({history, eventsList, eventsIds}) => (
	<BootstrapTable
        data={eventsIds.map(i => eventsList[i])}
        striped
        hover
        options = {{
            onRowClick: (r) => history.push('/events/'+r.id)
        }}
    >
        <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort filter={{type: 'TextFilter', delay: 50}}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField="reservedToAffiliates" dataSort>Affiliés</TableHeaderColumn>
        <TableHeaderColumn dataField="reservedToPartners" dataSort>Partenaires</TableHeaderColumn>
        <TableHeaderColumn dataField="current" dataSort >En cours</TableHeaderColumn>
        <TableHeaderColumn dataField="status" dataSort filter={{type: 'SelectFilter', selectText: 'Tous les', options: {'OPEN': 'ouvert', 'CLOSED': 'fermé', 'STARTED': 'démarré', 'ENDED': 'terminé'}}}>Etat</TableHeaderColumn>
    </BootstrapTable>
)

EventsListTable.propTypes = {
    eventsList: PropTypes.object.isRequired,
	eventsIds: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired
};

export default withRouter(EventsListTable);