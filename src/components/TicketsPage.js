import React, { Component } from 'react';
import {connect } from 'react-redux';
import TicketsList from './tickets/TicketsList';
import CurrencyFilter from './filters/CurrencyFilter';
import TransferFilter from './filters/TransferFilter';


class TicketsPage extends Component{
	state = {

	}



	render(){
		return(
				<div className="container">
					<section className="section-tickets">
						<div className="row">
							<div className="col-4">
								<div className="tickets-filter">
									<CurrencyFilter />
									<TransferFilter />
								</div>
							</div>
							<div className="col-8">
									<TicketsList />
							</div>
						</div>
					</section>
				</div>
		)
	}
} 


export default connect(
  state => ({

  }),
  dispatch=> ({

  })
)(TicketsPage);