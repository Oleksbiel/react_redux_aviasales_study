import {combineReducers} from 'redux';
import tickets from './tickets';
import currency from './currency';
import ticketsFilterState from './ticketsFilterState';

export default combineReducers({
	tickets,
	currency,
	ticketsFilterState
});