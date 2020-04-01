import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import { deleteAppointment } from '../actions/AppointmentsActions';

class AppointmentList extends Component {
    onDeleteAppointment = (appointmentId) => {
        this.props.deleteAppointment(appointmentId);
    }

    renderAppointment = (appointment) => {
    
        return (
            <li key={appointment.patientId} className="list-group-item">
                <strong>Patient ID: </strong>
                <span>{appointment.patientId}</span>
                <strong> Patient name: </strong>
                <span>{appointment.name}</span>
                <strong> Starting Time: </strong>
                <span>{appointment.startTime}</span>
                <span> - </span>
                <strong> Ending Time: </strong>
                <span>{appointment.endTime}</span>
                <button onClick={this.onDeleteAppointment.bind(this, appointment)} className="btn btn-sm btn-warning float-right">delete</button>
            </li>
        );
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.appointments.map(this.renderAppointment)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {
    deleteAppointment
})(AppointmentList);