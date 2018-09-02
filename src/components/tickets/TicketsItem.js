import React, { Component } from 'react';
import {connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class TicketsItem extends Component{
	state = {
		ticketPrice: this.props.dataItem.price,
		currentCurrency: []
	}

	componentWillMount(){
		const currentCurrency = this.props.currencyFilter.currencyList.filter(item => item.currency ==  this.props.ticketsFilterState.currencyFilterActive);

		this.setState({
			currentCurrency: currentCurrency
		});

	}

	componentDidUpdate(prevProps){
		const currentCurrency = this.props.currencyFilter.currencyList.filter(item => item.currency ==  this.props.ticketsFilterState.currencyFilterActive);



		if (this.props.ticketsFilterState !== prevProps.ticketsFilterState) {
			this.setState({
				ticketPrice: Math.round(this.props.dataItem.price / currentCurrency[0].rate),
				currentCurrency: currentCurrency
			});
	  }
	}


	render(){

		const ticket = this.props.dataItem;
		if(!ticket){
			return false;
		}

		return(
				<div className="card ticket-card mb-3">
					<ul className="mb-3">
						<li><strong>From:</strong> {ticket.origin_name}</li>
						<li><strong>To:</strong> {ticket.destination_name}</li>
						<li><strong>Stops:</strong> {ticket.stops}</li>
					</ul>
					<NavLink  to={`/tickets/${ticket.id}`} className="btn btn-primary btn-lg">
						Купить за {this.state.ticketPrice} {this.state.currentCurrency[0].symbol}
					</NavLink>
				</div>
		)
	}
} 


export default connect(
  state => ({
   currencyFilter: state.currency,
   ticketsFilterState: state.ticketsFilterState
  }),
  dispatch=> ({
  	
  })
)(TicketsItem);