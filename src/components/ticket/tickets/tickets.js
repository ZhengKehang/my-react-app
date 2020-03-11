import React from 'react';
import Ticket from '../ticket/ticket'
export default class Tickets extends React.Component{
    render() {
        const tickets = this.props.tickets;
        return tickets.map((ticket,index)=>{
            return (
                <Ticket ticket={ticket}
                        key={ticket.id}></Ticket>
            )
        })
    }
}
