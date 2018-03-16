import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const EventsListTable = ({history, eventsList, eventsIds}) => (
	<BootstrapTable
        className="border-0 pointer"
        bordered={false}
        data={eventsIds.map(i => eventsList[i])}
        striped
        hover
        options = {{
            onRowClick: (r) => history.push('/events/'+r.id)
        }}
    >
        <TableHeaderColumn
            dataField="id"
            isKey
            hidden
        >
            Id
        </TableHeaderColumn>
        <TableHeaderColumn
            className="align-top text-secondary font-weight-normal font-italic"
            dataField="name"
            dataSort
            filter={{type: 'TextFilter', placeholder: 'Chercher...', delay: 50}}
        >
            Name
        </TableHeaderColumn>
        <TableHeaderColumn
            className="align-top text-secondary font-weight-normal font-italic"
            dataField="reservedToAffiliates"
            dataSort
        >
            Affiliés
        </TableHeaderColumn>
        <TableHeaderColumn
            className="align-top text-secondary font-weight-normal font-italic"
            dataField="reservedToPartners"
            dataSort
        >
            Partenaires
        </TableHeaderColumn>
        <TableHeaderColumn
            className="align-top text-secondary font-weight-normal font-italic"
            dataField="current"
            dataSort
        >
            En cours
        </TableHeaderColumn>
        <TableHeaderColumn
            className="align-top text-secondary font-weight-normal font-italic"
            dataField="status"
            dataSort
            filter={{
                type: 'SelectFilter',
                selectText: 'Tous les',
                options: {
                    'OPEN': 'ouvert',
                    'CLOSED': 'fermé',
                    'STARTED': 'démarré',
                    'ENDED': 'terminé'
                }
            }}
        >
            Etat
        </TableHeaderColumn>
    </BootstrapTable>
)

EventsListTable.propTypes = {
    eventsList: PropTypes.object.isRequired,
	eventsIds: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired
};

export default withRouter(EventsListTable);