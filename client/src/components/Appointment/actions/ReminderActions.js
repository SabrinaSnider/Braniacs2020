import moment from 'moment';
import axios from 'axios'
import React, {useState} from 'react';


import {
	CREATE_REMINDER,
	REMINDER_FAIL,
	DELETEALL_REMINDER,
	SEARCH_REMINDER,
	FILL_REMINDERS
} from './types';

const mongoose = require('mongoose');


export const createReminder = (patientId, name, phone, reminderMessage) => {
	return async (dispatch, getState) => {
		dispatch({ type: REMINDER_FAIL, payload: '' });

		try {
			// normally some asyn logic goes here to add this appointment to a database

			// typically it will be the database that can reject a new appointment insertion but since
			// there is no database then the current store state will be checked

			// check for time in the past

			//search through patient database by id and retrieve. 
		
			phone = "+1" + phone;
			patientId = parseInt(patientId);
			let sid = "28";
			let time = moment().unix();


			//store reminder in database
			axios({
				method: 'post',
				url: '/reminder/create',
				data: {
					timeStamp: time,
					patientId,
					name,
					phone,
					reminderMessage,
					messageId: sid
				}
			}).then(function (response) {
				sid = response.data.sid;
			})
				.catch(function (error) {
					console.log(error);
				});

			axios({
				method: 'post',
				url: '/remapi/send',
				data: {
					timeStamp: time,
					patientId,
					name,
					phone,
					reminderMessage,
					messageId: sid
				}
			})

			let reminder = {
				timeStamp: time,
					patientId,
					name,
					phone,
					reminderMessage,
					messageId: sid
			}
			//console.log(reminder);

			/*axios.get('/reminders/fetch', patientId)
			  .then(function (response) {
				console.log(response);
			  })
			  .catch(function (error) {
				console.log(error);
			  });*/

			dispatch({ type: CREATE_REMINDER, payload: reminder });

		} catch (error) {
			dispatch({ type: REMINDER_FAIL, payload: 'Reminder failed to be added - contact technical support' });
		}
	};
};

/*export const resendReminder = (reminder) => {
	return async (dispatch) => {
		dispatch({ type: REMINDER_FAIL, payload: '' });

		try {
			// normally some asyn logic goes here to delete the data from the database
			this.createReminder(moment(), reminder.patientId, reminder.reminderMessage, reminder.name);
			//axios.delete('/reminder/remove',  {data: {patientId: reminder.patientId}} );

		} catch (error) {
			console.log('Failed to resend reminder', error);
			dispatch({ type: REMINDER_FAIL, payload: 'Resend reminder failed - contact technical support' });
		}
	};
};*/

export const deleteAllReminders = () => {
	return async (dispatch) => {
		dispatch({ type: REMINDER_FAIL, payload: '' });
		try {
			axios.delete('/reminder/removeAll');
			dispatch({ type: DELETEALL_REMINDER });
		} catch (error) {
			console.log('Failed to delete appointment', error);
			dispatch({ type: REMINDER_FAIL, payload: 'Remidners failed to be deleted - contact technical support' });
		}
	};
};


export const searchReminder = (patientId) => {
    return async (dispatch) => {
        dispatch({ type: REMINDER_FAIL, payload: '' });

        try {
            // normally some asyn logic goes here to delete the data from the database
            dispatch({ type: SEARCH_REMINDER, payload: patientId});
        } catch (error) {
            dispatch({ type: REMINDER_FAIL, payload: 'Reminders not found' });
        }
    };
};

export const fillReminders = () =>{
	return async (dispatch) =>{
        dispatch({type: REMINDER_FAIL, payload: ''});

        try{
            let arr1 = []
            let sampleAppoint = [];
            axios.get('/reminder/list', {})
			.then(function (response) {
				//console.log("Reminder response", response)
				sampleAppoint.data = (response.data);
				sampleAppoint.data.forEach(element => {
					arr1.push(element);
					});
				//console.log("arr", arr2)

				//currentComponent.setState({
					//myArray: arr
				//});
				//console.log(sampleAppoint.data[1].name);
			})

            .then(()=>{
                dispatch({ type: FILL_REMINDERS, payload: arr1});
            })
            
        } catch(error){
            dispatch({ type: REMINDER_FAIL, payload: 'Couldn\'t fill reminders' });
        }
    }
}