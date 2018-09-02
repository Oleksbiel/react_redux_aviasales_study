
import {createStore} from 'redux';

function playlist(state = []){
	return state;
}

const store = createStore(playlist);


console.log(store.getState());