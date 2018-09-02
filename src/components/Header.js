import React, { Component } from 'react';
import {connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class AboutPage extends Component{
	state = {

	}



	render(){
		return(
				<header className="header">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<NavLink to="/"  className="navbar-brand"> 
							Navbar
						</NavLink>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>

					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav ml-auto">
					      <li className="nav-item" >
					      	<NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink>
					      </li>
					      <li className="nav-item" >
					      	<NavLink to="/about" className="nav-link"  activeClassName="active">About</NavLink>
					      </li>
					      <li className="nav-item" >
					      	<NavLink to="/tickets" className="nav-link"  activeClassName="active">Tickets</NavLink>
					      </li>

					    </ul>
					  </div>
					</nav>
				</header>
		)
	}
} 


export default connect(
  state => ({

  }),
  dispatch=> ({

  })
)(AboutPage);