import React, { Component } from 'react';
import {connect } from 'react-redux';
import TicketsItem from './TicketsItem'


class TicketsList extends Component{
	state = {
		filteredTickets: []
	}

	componentWillMount(){
		this.setState({
			filteredTickets: this.props.tickets
		})
	}


	componentDidUpdate(prevProps){

		let filteredTickets = [];

		if (this.props.ticketsFilterState !== prevProps.ticketsFilterState) {


			if(this.props.ticketsFilterState.totalStops.length > 0){

				 filteredTickets = this.props.tickets.filter(item => this.props.ticketsFilterState.totalStops.includes(-1) || this.props.ticketsFilterState.totalStops.includes(item.stops) );

			} else {
				 filteredTickets = this.props.tickets;
			}

			this.setState({
				filteredTickets: filteredTickets
			});

		}
	}

	render(){
		return(
				<div>
					{ this.state.filteredTickets.map((item , key) =>  <TicketsItem key={key} dataItem={item} /> ) }
				</div>
		)
	}
} 


export default connect(
  state => ({
    tickets: state.tickets,
    ticketsFilterState: state.ticketsFilterState
  }),
  dispatch=> ({
  	

  })
)(TicketsList);