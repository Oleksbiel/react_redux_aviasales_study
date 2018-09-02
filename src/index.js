import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import {BrowserRouter, Route , Switch } from 'react-router-dom';

import './index.css';
import './assets/css/bootstrap.min.css';

import TicketsPage from './components/TicketsPage';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import TicketsSinglePage from './components/TicketsSinglePage';






const store = createStore(reducer);



store.subscribe(() =>  {
	console.log('subscribe', store.getState());
});


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
			 	<Header />
				<Switch>
					<Route path="/" component={HomePage}  exact  /> 
					<Route path="/about" component={AboutPage}  exact  /> 
					<Route path="/tickets" component={TicketsPage} exact  /> 
					<Route path="/tickets/:id" component={TicketsSinglePage}   /> 
					<Route component={ErrorPage} /> 
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
		, document.getElementById('root'));
