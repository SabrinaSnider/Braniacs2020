import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import { createReminder } from '../actions/ReminderActions';

class ReminderList extends Component {
    onResend = (toResend) => {
        this.props.createReminder(toResend.patientId, toResend.name, toResend.phone, toResend.reminderMessage);
    }

    renderReminder = (reminder) => {
        let time = moment.unix(reminder.timeStamp).format('MMMM Do, YYYY (hh:mm a)');

        return (

            <li key={reminder.timeStamp} className="list-group-item">
                <strong>Patient ID: </strong>
                <span>{reminder.patientId}</span>
				<strong> Patient Name: </strong>
                <span>{reminder.name}</span>
                <strong> Reminder Message: </strong>
                <span>{reminder.reminderMessage}</span>
                <strong> Reminder Sent at: </strong>
                <span>{time}</span>
                <button onClick={this.onResend.bind(this, reminder)} className="btn btn-sm btn-warning float-right">Resend</button>
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
    createReminder
})(ReminderList);