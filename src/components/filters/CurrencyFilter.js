import React, { Component } from 'react';
import {connect } from 'react-redux';


class CurrencyFilter extends Component{
	state = {
		
	}


	handleChangeCurrency = (e) =>{

		this.props.onChangeCurrency(e.target.value);

	}

	render(){
		const activeCurrency = this.props.ticketsFilterState.currencyFilterActive;

		// console.log(activeCurrency);

		return(
				<div className="filter">
					<h5 className="mb-2">Валюта</h5>
					<ul>
					{this.props.currency.currencyList.map((item , key) =>  {

						return  <li key={key}>
											<input  type="radio" 
															name="ticket_filter_currency" 
															onChange={this.handleChangeCurrency} 
															value={item.currency} 
															defaultChecked={activeCurrency == item.currency} /> 
											<strong>{item.currency}</strong> 
										</li>

					})}
					</ul>
				</div>
		)
	}
} 


export default connect(
  state => ({
   	currency: state.currency,
   	ticketsFilterState: state.ticketsFilterState
  }),
  dispatch=> ({
  	onChangeCurrency: (currency) => {
  		dispatch({type: 'CHANGE_CURRENCY', payload: currency});
  	}
  })
)(CurrencyFilter);