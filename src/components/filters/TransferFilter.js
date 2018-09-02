import React, { Component } from 'react';
import {connect } from 'react-redux';


class TransferFilter extends Component{
	state = {
		totalStops: [],
	}


	componentWillMount(){
		let totalStops = this.removeDuplicateUsingFilter(this.props.tickets.map(item => item.stops));
		totalStops = totalStops.sort((a, b) => a - b);
		this.setState({
			totalStops: totalStops 
		});
	
	}

	removeDuplicateUsingFilter = (arr) => {
    let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });

    return unique_array
}




	handleChangeCurrency = (event) =>{

    const checkedCheckbox = this.props.ticketsFilterState.totalStops
    let index;

    if(event.target.checked){

    		checkedCheckbox.push(+event.target.value)

    } else {
    	index = checkedCheckbox.indexOf(+event.target.value);
      checkedCheckbox.splice(index, 1);
    }


    this.props.onChangeStops(checkedCheckbox);



	}

	render(){


		return(
				<div className="filter">
					<h5 className="mb-2">Количество пересадок</h5>
					<ul>
					 <li >
							<input  type="checkbox" 
											name="ticket_filter_currency" 
											onChange={this.handleChangeCurrency} 
											value='-1'  /> 
							<strong> Все</strong> 
						</li>
					{this.state.totalStops.map((item , key) =>  {

						return  <li key={key}>
											<input  type="checkbox" 
															name="ticket_filter_currency" 
															onChange={this.handleChangeCurrency} 
															value={item}  /> 
											<strong>{item >= 1 ? item : ''} {item == 0 ? 'Без пересадок' :  item == 1 ? 'Пересадка' : 'Пересадки' }</strong> 
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
   	tickets: state.tickets,
   	ticketsFilterState: state.ticketsFilterState
  }),
  dispatch=> ({
  	onChangeStops: (currency) => {
  		dispatch({type: 'CHANGE_TOTAL_STOPS', payload: currency});
  	}
  })
)(TransferFilter);