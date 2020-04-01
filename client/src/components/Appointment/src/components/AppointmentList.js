import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import { deleteAppointment } from '../actions';

class AppointmentList extends Component {
    onDeleteAppointment = (appointment) => {
        this.props.deleteAppointment(appointment);
    }

    RequestNodes = (appointment) => {
        return (
            <li key={appointment._id} className="list-group-item">
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
            //{this.props.appointments.map(this.renderAppointment)}
        );
    }

    render() {
        console.log("This is the data in appointmnet list", this.props.appointments)
        return (
            <ul className="list-group">
                {this.props.appointments.map(this.RequestNodes)}
            </ul>
        );
    }
};

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps, {
    deleteAppointment
})(AppointmentList);
