import { combineReducers } from 'redux';
import AppointmentsReducer from './AppointmentsReducer';
import ReminderReducer from './ReminderReducer';
import PatientReducer from './PatientReducer';


export default combineReducers({
    appointments: AppointmentsReducer, 
    reminders: ReminderReducer,
    patients: PatientReducer
});