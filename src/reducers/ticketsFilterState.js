const CHANGE_TOTAL_STOPS = 'CHANGE_TOTAL_STOPS';
const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

const initialState = {
		totalStops: [],
		currencyFilterActive: 'rub'
};

export default function playlist(state = initialState , action){

	switch(action.type){
		case CHANGE_TOTAL_STOPS:
			return {
				...state,
				totalStops: action.payload
			};
			break;
		case CHANGE_CURRENCY:
			return{
				...state,
				currencyFilterActive: action.payload
			}
			break;
		default:
			return state;
	}
}
