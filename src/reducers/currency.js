const ADD_CURRENCY = 'ADD_CURRENCY';

const initialState = {
		currencyList: [{
				currency: 'usd',
				rate: 67.5184,
				symbol: '$'
			},
			{
				currency: 'eur',
				rate: 78.3245,
				symbol: '€'
			},
			{
				currency: 'rub',
				rate: 1,
				symbol: '₽'
			}],
};

export default function playlist(state = initialState , action){

	switch(action.type){
		case ADD_CURRENCY:
			return [
				// ...state,
				// action.payload
			];
			break;
		default:
			return state;
	}
}
