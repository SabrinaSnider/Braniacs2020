import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';
import axios from 'axios'

import {
    CREATE_REMINDER, 
    REMINDER_FAIL,
    DELETEALL_REMINDER, 
    SEARCH_REMINDER,
    FILL_REMINDERS
} from '../actions/types';

    let prevState = [];



    
// One default appointment item added as example
const INITIAL_STATE = {
    items1: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FILL_REMINDERS:
            return{
                ...state,
                items1: action.payload,
                error: ''
            };
		case CREATE_REMINDER:
			// add the appointment to the store
			
			action.payload.id = uuid.v4();
			let items1 = state.items1.slice(0);
			items1.push(action.payload);
		
			//console.log(state.items1);


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

            case SEARCH_REMINDER:
                let newItems = [];
                let error1 = '';
            
                if(action.payload !== "c"){
                    prevState = state.items1;
                    let id = parseInt(action.payload);
                    state.items1.forEach((o) => {
                        if (o.patientId === id){
                            newItems.push(o);
                        }
                    })
    
                    state.items1=newItems;
                }
                else {
                    state.items1 = prevState;
                    prevState = [];
                }
    
                return {
                    ...state,
                    error: error1
                };
        
            
        default:
            return state;
    }
}