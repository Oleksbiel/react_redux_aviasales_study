import React, { Component } from 'react';
import {connect } from 'react-redux';

class ErrorPage extends Component{
	state = {

	}



	render(){
		return(
				<div className="container">
					<h1>404 page</h1>
					<a href="/">Go back</a>
				</div>
		)
	}
} 


export default connect(
  state => ({

  }),
  dispatch=> ({

  })
)(ErrorPage);