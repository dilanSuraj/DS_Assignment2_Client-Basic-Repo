import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import dbProperties from '../dbProperties/dbProperty';

const Ticket = props => (
    <tr>
        <td className={props.ticket.trainName}>{props.ticket.trainName}</td>
        <td className={props.ticket.departure}>{props.ticket.departure}</td>
        <td className={props.ticket.destination}>{props.ticket.destination}</td>
        <td className={props.ticket.departureTime}>{props.ticket.departureTime}</td>
        <td>
            <Link to={"/" + props.ticket.ticketId}>Edit</Link>
        </td>
    </tr>
);

export default class TicketList extends Component {

    constructor(props) {
        super(props);
        this.state = {tickets: []};
    }

    componentDidMount() {
        console.log('here');
        axios.get(dbProperties.appUrl+'tickets/').then(res => {
            this.setState({
                tickets: res.data
            });
            
        }).catch(function (err) {
            console.log(err);
        });
    }

    //After adding this, we do not need to refresh the page to see the updated codes
    componentDidUpdate() {
        axios.get(dbProperties.appUrl+'tickets/').then(res => {
            this.setState({
                tickets: res.data
            });
           
        }).catch(function (err) {
            console.log(err);
        });
    }

    ticketList() {
        return this.state.tickets.map(function (currentticket, i) {
            return <Ticket ticket={currentticket} key={i}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Ticket List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>trainName</th>
                        <th>departure</th>
                        <th>destination</th>
                        <th>departureTime</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.ticketList()}
                    </tbody>
                </table>
            </div>

        );
    }
}