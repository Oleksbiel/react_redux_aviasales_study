import React, { Component } from 'react';
import {connect } from 'react-redux';

class AboutPage extends Component{
	state = {

	}



	render(){
		return(
				<div className="container">
					<h1>About page</h1>
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
)(AboutPage);