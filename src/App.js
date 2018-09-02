import React, { Component } from 'react';
import {connect } from 'react-redux';
import './App.css';
import './assets/css/bootstrap.min.css';
import TicketsPage from './components/TicketsPage';

class App extends Component {
  render() {
    return (
      <div>
        <TicketsPage />
      </div>
    );
  }
}

export default connect(
  state => ({
    
  }),
  dispatch=> ({})
)(App);
