import React, { Component } from 'react';
import {connect } from 'react-redux';


class TicketAdd extends Component{
	state = {
		input: ''
	}

handleTriger = (e) =>{
	this.setState({
		input: e.target.value
	});
}
saveTicket = () => {
	this.props.onAddTicket(this.state.input);
	this.setState({
		input: ''
	});
}

	render(){
		console.log(this.props.tickets);
		return(
				<div>
				<TicketsList />
				<input type="text" onChange={this.handleTriger} value={this.state.input} />
				<button onClick={this.saveTicket}>Save</button>
					<ul>
						{ this.props.tickets.map((item , key) => <li key={key}>{item.origin_name}</li>) }
					</ul>
				</div>
		)
	}
} 


export default connect(
  state => ({
    tickets: state.tickets
  }),
  dispatch=> ({
  	onAddTicket: (ticket) => {
  		dispatch({type: 'ADD_TICKET', payload: ticket});
  	}
  })
)(TicketAdd);