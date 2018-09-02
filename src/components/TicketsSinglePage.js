import React, { Component } from 'react';
import {connect } from 'react-redux';

class TicketsSinglePage extends Component{
	state = {

	}




	render(){
		console.log(this.props.ticket);
		return(
				<div className="container">
					<h1>Ticket single page</h1>
					<ul>
						{ Object.keys(this.props.ticket).map((item , key) => <li key={key}><strong>{item}-------</strong>{this.props.ticket[item]}</li>) }
					</ul>
				</div>
		)
	}
} 

const mapStateToProps = (state , ownProps) => {
			return {
				ticket: state.tickets.find(ticket => ticket.id === Number(ownProps.match.params.id))
			}
	}


export default connect(mapStateToProps)(TicketsSinglePage);