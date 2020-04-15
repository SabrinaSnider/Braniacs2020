
import {
	GET_PATIENT,
	PATIENT_FAIL
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

