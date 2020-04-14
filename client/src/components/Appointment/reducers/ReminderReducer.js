import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';
import axios from 'axios'

import {
    CREATE_REMINDER, 
    REMINDER_FAIL,
    DELETEALL_REMINDER
} from '../actions/types';

    let sampleAppoint2 = [];
    let arr2 = [];


    axios.get('/reminder/list', {})
        .then(function (response) {
            console.log("Reminder response", response)
            sampleAppoint2.data = (response.data);
            sampleAppoint2.data.forEach(element => {
                arr2.push(element);
                });
            console.log("arr", arr2)

            //currentComponent.setState({
                //myArray: arr
            //});
            //console.log(sampleAppoint.data[1].name);
        })
        .catch(function (error) {
            console.log(error);
        });

// One default appointment item added as example
const INITIAL_STATE = {
    items1: arr2,
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
		case CREATE_REMINDER:
			// add the appointment to the store
			
			action.payload.id = uuid.v4();
			let items1 = state.items1.slice(0);
			items1.push(action.payload);
		
			console.log(state.items1);


			return {
				...state,
				items1,
				error: ''
			};
		
		
		case REMINDER_FAIL:
			// set the appointment store error
			return {
				...state,
				error: action.payload
			};
		
        case DELETEALL_REMINDER:
            let emptyItems = [];
            state.items1 = emptyItems;

            return {
				...state,
				error: ''
            };
            
        default:
            return state;
    }
}