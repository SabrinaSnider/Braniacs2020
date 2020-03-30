import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import { deleteAppointment } from '../actions';


class AppointmentList extends Component {

    onDeleteAppointment = (appointment) => {
        this.props.deleteAppointment(appointment);
    }

    updateApps = () => {
        let sampleAppoint = [];

        axios.get('/appt/list', {})
          .then(function (response) {
            sampleAppoint.data = (response.data);
            console.log(sampleAppoint.data);
          })
          .catch(function (error) {
            console.log(error);
          }); 
        return sampleAppoint;
    }

    renderAppointment = (appointment) => {

        this.updateApps();

        let startTime = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
        let endTime = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');
        let patientId = appointment.patientId;
        let name = appointment.name;

        return (
               <li key={appointment.id} className="list-group-item">
                <strong>Patient ID: </strong>
                <span>{patientId}</span>
                <strong>Patient name: </strong>
                <span>{name}</span>
                <strong> Starting Time: </strong>
                <span>{startTime}</span>
                <span> - </span>
                <strong>Ending Time: </strong>
                <span>{endTime}</span>
                <button onClick={this.onDeleteAppointment.bind(this, appointment)} className="btn btn-sm btn-warning float-right">delete</button>

            </li> 
            //{this.props.appointments.map(this.renderAppointment)}
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