import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';


import {
	GET_PATIENT,
    PATIENT_FAIL,
    FILL_PATIENTS
} from '../actions/types';

    let samplePatient = [];
	let arr3 = [];
	let retPat = [];
	



// One default appointment item added as example
const INITIAL_STATE = {
	items3: arr3,
	patient: retPat,
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FILL_PATIENTS:
        
            return{
                ...state,
                items3: action.items3,
                patient: action.retPat,
                error: ''
            };

		case GET_PATIENT:
			//console.log(action.payload);
			//console.log(state.items3);
			let index = _.findIndex(state.items3, function(o) { return o.patientId == action.payload; });
			
			//console.log(index);

			state.patient = state.items3.slice(index);
        			
			//console.log(state.patient[0].patientId);

            return {
				...state,
                error: ''
            };
            
        default:
            return state;
    }
}