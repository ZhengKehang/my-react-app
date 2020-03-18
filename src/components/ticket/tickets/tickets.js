import React from 'react';
import Ticket from '../ticket/ticket'
import './tickets.less'
export default class Tickets extends React.Component{
    render() {
        const tickets = this.props.tickets;
        const ticketsContent = tickets.map((ticket,index)=>{
            return (
                <Ticket ticket={ticket}
                        type={this.props.type}
                        key={ticket.id}/>
            )
        });
        return (
            <div className="ticket-list">
                {ticketsContent}
            </div>
        )
    }
}
