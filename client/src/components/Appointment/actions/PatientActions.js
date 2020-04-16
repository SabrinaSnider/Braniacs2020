import axios from 'axios'

import {
	GET_PATIENT,
	PATIENT_FAIL,
	FILL_PATIENTS
} from './types';

const mongoose = require('mongoose');

export const getPatientById = (thisPatient) => {
	return async (dispatch) => {
		dispatch({ type: PATIENT_FAIL, payload: '' });
		try {
			console.log(thisPatient.patientId);
			dispatch({ type: GET_PATIENT, payload: thisPatient.patientId});
		} catch (error) {
			dispatch({ type: PATIENT_FAIL, payload: 'Could not find patient - contact technical support' });
		}
	};
};

export const fillPatients = () => {
    return async (dispatch) =>{
        dispatch({type: PATIENT_FAIL, payload: ''});

        try{
			let retPat = [];
			retPat.push({
                name: {
                    first: "",
                }
            })
            let arr1 = []
            let samplePatient = [];
            axios.post('/patient/list', {})
			.then(function (response) {
				samplePatient.data = (response.data);
				samplePatient.data.forEach(element => {
					arr1.push(element);
					});
			})
            .then(()=>{
                dispatch({ type: FILL_PATIENTS, items3: arr1, retPat: retPat});
            })
            
        } catch(error){
            dispatch({ type: PATIENT_FAIL, payload: 'Couldn\'t fill patients' });
        }
    }
};

