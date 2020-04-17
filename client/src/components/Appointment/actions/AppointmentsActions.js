import moment from 'moment';
import axios from 'axios'
import React from 'react';
import { createReminder } from './ReminderActions';


import {
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    APPOINTMENT_FAIL,
    SEARCH_APPOINTMENT,
    FILL_APPOINTMENTS
} from './types';
const mongoose = require('mongoose');

export const addAppointment = (startTime, endTime, patientID, name, reminderBool) => {
    return async (dispatch, getState) => {
        
        dispatch({ type: APPOINTMENT_FAIL, payload: '' });

        try {
           
            // normally some asyn logic goes here to add this appointment to a database

            // typically it will be the database that can reject a new appointment insertion but since
            // there is no database then the current store state will be checked
            
            // check for time in the past

            
            if(startTime < moment().unix()) {
                dispatch({ type: APPOINTMENT_FAIL, payload: 'You are adding an appointment thst is in the past. Only future date appointments can be set. Please try again' });
                return
            }

            // check for a time overlap
            let overlap = false;
            let appointments = getState().appointments;

            appointments.items.forEach((appointment) => {
                if ((startTime >= appointment.startTime && startTime <= appointment.endTime) || (endTime >= appointment.startTime && endTime <= appointment.endTime)) {
                    overlap = true;
                }
            })

            if (overlap) {
                dispatch({ type: APPOINTMENT_FAIL, payload: 'You are adding an appointment that has an overlap conflict with your current appointments. Please try again' });
            } else {
                //let startTime1 = moment.unix(startTime).format('MMMM Do, YYYY (hh:mm a)');
                //let endTime1= moment.unix(endTime).format('MMMM Do, YYYY (hh:mm a)');
                
                //create a reminder
                

                let appointment = {
                    startTime,
                    endTime, 
                    patientId: patientID, 
                    name, 
                    reminderBool    
                }

                axios({
                    method: 'post',
                    url: '/appt/create',
                    data: {
                        name: name,
                        patientId: patientID,
                        reminderBool: reminderBool,
                        startTime,
                        endTime
                    }
                })

                dispatch({ type: ADD_APPOINTMENT, payload: appointment });
            }
        } catch (error) {
            dispatch({ type: APPOINTMENT_FAIL, payload: 'Appointment failed to be added - contact technical support' });
        }
    };
};

export const deleteAppointment = (appointmentStart) => {
    return async (dispatch) => {
        dispatch({ type: APPOINTMENT_FAIL, payload: '' });

        try {
            console.log("Deleting appt at this time: " + appointmentStart);
            axios.delete('/appt/remove',  {data: {startTime: appointmentStart}} );

            dispatch({ type: DELETE_APPOINTMENT, payload: appointmentStart});
        } catch (error) {
            console.log('Failed to delete appointment', error);
            dispatch({ type: APPOINTMENT_FAIL, payload: 'Appointment failed to be deleted - contact technical support' });
        }
    };
};

export const searchAppointment = (patientId) => {
    return async (dispatch) => {
        dispatch({ type: APPOINTMENT_FAIL, payload: '' });

        try {
            console.log(patientId);
            let arr1 = []
            let sampleAppoint = [];
            axios.get('/appt/list', {})
            .then(function (response) {
                //console.log("Appointment response", response)
                sampleAppoint.data = (response.data);
                sampleAppoint.data.forEach(element => {
                    console.log(element);
                    if(element.patientId === patientId){
                        arr1.push(element);
                    }
                });
                console.log("Calling from Appointment Action", arr1)
                
            })
            .then(()=>{dispatch({ type: SEARCH_APPOINTMENT, payload: arr1});});
        } catch (error) {
            dispatch({ type: APPOINTMENT_FAIL, payload: 'Appointment not found' });
        }
    };
};

export const fillAppointments = () => {
    return async (dispatch) =>{
        dispatch({type: APPOINTMENT_FAIL, payload: ''});

        try{
            
            

            let arr1 = []
            let sampleAppoint = [];
            axios.get('/appt/list', {})
            .then(function (response) {
                //console.log("Appointment response", response)
                sampleAppoint.data = (response.data);
                sampleAppoint.data.forEach(element => {
                    arr1.push(element);
                    });
                console.log("Calling from Appointment Action", arr1)
                
            })
            .then(()=>{
                dispatch({ type: FILL_APPOINTMENTS, payload: arr1});
            })
            
        } catch(error){
            dispatch({ type: APPOINTMENT_FAIL, payload: 'Couldn\'t fill appointments' });
        }
    }
};