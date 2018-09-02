const ADD_TICKET = 'ADD_TICKET';

const initialState =  [{
    "id": 1,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "16:20",
    "arrival_date": "12.05.18",
    "arrival_time": "22:10",
    "carrier": "TK",
    "stops": 3,
    "price": 12400
  }, {
    "id": 2,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "17:20",
    "arrival_date": "12.05.18",
    "arrival_time": "23:50",
    "carrier": "S7",
    "stops": 1,
    "price": 13100
  }, {
    "id": 3,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "12:10",
    "arrival_date": "12.05.18",
    "arrival_time": "18:10",
    "carrier": "SU",
    "stops": 0,
    "price": 15300
  }, {
    "id": 4,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "17:00",
    "arrival_date": "12.05.18",
    "arrival_time": "23:30",
    "carrier": "TK",
    "stops": 2,
    "price": 11000
  }, {
    "id": 5,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "12:10",
    "arrival_date": "12.05.18",
    "arrival_time": "20:15",
    "carrier": "BA",
    "stops": 3,
    "price": 13400
  }, {
    "id": 6,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "9:40",
    "arrival_date": "12.05.18",
    "arrival_time": "19:25",
    "carrier": "SU",
    "stops": 3,
    "price": 12450
  }, {
    "id": 7,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "17:10",
    "arrival_date": "12.05.18",
    "arrival_time": "23:45",
    "carrier": "TK",
    "stops": 1,
    "price": 13600
  }, {
    "id": 8,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "6:10",
    "arrival_date": "12.05.18",
    "arrival_time": "15:25",
    "carrier": "TK",
    "stops": 0,
    "price": 14250
  }, {
    "id": 9,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "16:50",
    "arrival_date": "12.05.18",
    "arrival_time": "23:35",
    "carrier": "SU",
    "stops": 1,
    "price": 16700
  }, {
    "id": 10,
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "6:10",
    "arrival_date": "12.05.18",
    "arrival_time": "16:15",
    "carrier": "S7",
    "stops": 0,
    "price": 17400
  }];

export default function playlist(state = initialState, action) {

    switch (action.type) {
        case ADD_TICKET:
        console.log(action);
            // return [
            //     ...state,
            //     action.payload
            // ];
            break;
        default:
            return state;
    }
}