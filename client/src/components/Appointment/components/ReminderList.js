import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import { resendReminder } from '../actions/ReminderActions';

class ReminderList extends Component {
    onResend = (reminderId) => {
        this.props.resendReminder(reminderId);
    }

    renderAppointment = (reminder) => {
    
        return (
            <li key={reminder.patientId} className="list-group-item">
                <strong>Patient ID: </strong>
                <span>{reminder.patientId}</span>
				<strong>Patient Name: </strong>
                <span>{reminder.name}</span>
                <strong> Reminder Message: </strong>
                <span>{reminder.reminderMessage}</span>
                <strong> Reminder Sent at: </strong>
                <span>{reminder.timeStamp}</span>
                <button onClick={this.resendReminder.bind(this, reminder)} className="btn btn-sm btn-warning float-right">Resend</button>
            </li>
        );
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.reminders.map(this.renderReminder)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {
    resendReminder
})(ReminderList);