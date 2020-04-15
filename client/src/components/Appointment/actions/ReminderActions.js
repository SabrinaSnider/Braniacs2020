import moment from 'moment';
import axios from 'axios'
import React from 'react';


import {
    CREATE_REMINDER,
	REMINDER_FAIL
} from './types';
const mongoose = require('mongoose');

export const createReminder = (dateTime, patientId, message) => {
    return async (dispatch, getState) => {
        
        dispatch({ type: REMINDER_FAIL, payload: '' });

        try {
           
            // normally some asyn logic goes here to add this appointment to a database

            // typically it will be the database that can reject a new appointment insertion but since
            // there is no database then the current store state will be checked
            
            // check for time in the past

				//search through patient database by id and retrieve. 
				let phoneNum = moment.unix().format('MMMM Do, YYYY (hh:mm a)');
				let emailAdr =  moment.unix().format('MMMM Do, YYYY (hh:mm a)');
				let namePat = moment.unix().format('MMMM Do, YYYY (hh:mm a)');

                let reminders = {
                    timeStamp: dateTime,
                    patientId: patientId, 
					name: namePat, 
					phone: phoneNum,
					email: emailAdr,
                    reminderMessage: message
                }

                axios({
                    method: 'post',
                    url: '/reminder/create',
                    data: {
						timeStamp: dateTime,
						patientId: patientId, 
						name: namePat, 
						phone: phoneNum,
						email: emailAdr,
						reminderMessage: message
                    }
                })

                dispatch({ type: CREATE_REMINDER, payload: reminders });
            
        } catch (error) {
            dispatch({ type: REMINDER_FAIL, payload: 'Reminder failed to be added - contact technical support' });
        }
    };
};

export const resendReminder = (reminder) => {
    return async (dispatch) => {
        dispatch({ type: REMINDER_FAIL, payload: '' });

        try {
            // normally some asyn logic goes here to delete the data from the database
			this.createReminder(reminder.dateTime, reminder.patientId, reminder.message);
        } catch (error) {
            console.log('Failed to resend reminder', error);
            dispatch({ type: REMINDER_FAIL, payload: 'Resend reminder failed - contact technical support' });
        }
    };
};