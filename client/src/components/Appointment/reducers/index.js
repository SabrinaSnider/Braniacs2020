import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AppointmentsReducer from './AppointmentsReducer';
import ReminderReducer from './ReminderReducer';

export default combineReducers({
    auth: AuthReducer,
    appointments: AppointmentsReducer, 
    reminders: ReminderReducer
});