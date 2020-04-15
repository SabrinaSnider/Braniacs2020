import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';
import axios from 'axios'

import {
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    APPOINTMENT_FAIL,
    CREATE_REMINDER,
	REMINDER_FAIL
} from '../actions/types';

    let sampleAppoint = [];
    let sampleReminder = []; 
    let arr = [];
    let arr2 =[];

    //get appointments
    axios.get('/appt/list', {})
        .then(function (response) {
            console.log("Appointment response", response)
            sampleAppoint.data = (response.data);
            sampleAppoint.data.forEach(element => {
                arr.push(element);
                });
            console.log("arr", arr)

            //currentComponent.setState({
                //myArray: arr
            //});
            //console.log(sampleAppoint.data[1].name);
        })
        .catch(function (error) {
            console.log(error);
        });

    //get reminders change to reminder list
    axios.get('/appt/list', {})
        .then(function (response) {
            console.log("reminder response", response)
            sampleReminder.data = (response.data);
            sampleReminder.data.forEach(element => {
                arr2.push(element);
                });
            console.log("arr2", arr2)

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
    itemsAppt: arr,
    itemsRem: arr2,
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_APPOINTMENT:
            // add the appointment to the store
           
            action.payload.id = uuid.v4();
            let itemsAppt = state.itemsAppt.slice(0);
            itemsAppt.push(action.payload);
        
            console.log(state.itemsAppt);


            return {
                ...state,
                itemsAppt,
                error: ''
            };
        case APPOINTMENT_FAIL:
            // set the appointment store error
            return {
                ...state,
                error: action.payload
            };
        case DELETE_APPOINTMENT:
            // remove the appointment by id from store
            state.itemsAppt = _.remove(state.itemsAppt, (appointment) => {
                return appointment.patientId !== action.payload;
            });

            return {
                ...state,
                error: ''
            };

        case CREATE_REMINDER:
            // add the appointment to the store
            
            action.payload.id = uuid.v4();
            let itemsRem = state.itemsRem.slice(0);
            itemsRem.push(action.payload);
        
            console.log(state.itemsRem);


            return {
                ...state,
                itemsRem,
                error: ''
            };
        case REMINDER_FAIL:
            // set the appointment store error
            return {
                ...state,
                error: action.payload
            };
        

        default:
            return state;
    }
}