import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';
import axios from 'axios'

import {
	GET_PATIENT,
	PATIENT_FAIL
} from '../actions/types';

    let samplePatient = [];
	let arr3 = [];
	let retPat = [];
	retPat.push({
		name: {
			first: "",
		}
	})

    axios.post('/patient/list', {})
        .then(function (response) {
            console.log("Patient response", response)
            samplePatient.data = (response.data);
            samplePatient.data.forEach(element => {
                arr3.push(element);
                });
            console.log("patients:", arr3)

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
	items3: arr3,
	patient: retPat,
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

		case GET_PATIENT:
			console.log(action.payload);
			console.log(state.items3);
			let index = _.findIndex(state.items3, function(o) { return o.patientId == action.payload; });
			
			console.log(index);

			state.patient = state.items3.slice(index);
        			
			console.log(state.patient[0].patientId);

            return {
				...state,
                error: ''
            };
            
        default:
            return state;
    }
}