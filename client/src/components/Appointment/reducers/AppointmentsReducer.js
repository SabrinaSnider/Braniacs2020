import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';
import axios from 'axios'

import {
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    APPOINTMENT_FAIL, 
    SEARCH_APPOINTMENT,
    FILL_APPOINTMENTS
} from '../actions/types';


// One default appointment item added as example
const INITIAL_STATE = {
    items: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FILL_APPOINTMENTS:
        
            return{
                ...state,
                items: action.payload,
                error: ''
            };
        case ADD_APPOINTMENT:
            // add the appointment to the store
           
            action.payload.id = uuid.v4();
            let items = state.items.slice(0);
            items.push(action.payload);
        
            console.log(state.items);


            return {
                ...state,
                items,
                error: ''
            };
        case APPOINTMENT_FAIL:
            // set the appointment store error
            return {
                ...state,
                error: action.payload
            };
        case DELETE_APPOINTMENT:

            return {
                ...state,
                items: state.items.filter( appointment => appointment.startTime !== action.payload ),
                error: ''
            };

        case SEARCH_APPOINTMENT:
            return {
                ...state,
                items: action.payload,
                error: ''
            };
    
        default:
            return state;
    }
}