import React, { Component } from 'react';
import {connect } from 'react-redux';

class HomePage extends Component{
	state = {

	}



	render(){
		return(
				<div className="container">
					<h1>Home page</h1>
					<p>Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem Lorem lorem lorem lorem Lorem </p>
				</div>
		)
	}
} 


export default connect(
  state => ({

  }),
  dispatch=> ({

  })
)(HomePage);