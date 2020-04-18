import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';


import {
    UPDATE_DATE
} from '../actions/types';




// One default appointment item added as example
const INITIAL_STATE = {
    date: new Date(moment()),
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UPDATE_DATE:
			state.date = action.payload;
        
            return {
                ...state,
                date,
                error: ''
            };

        case DATE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}