import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions/AppointmentsActions';
import { createReminder, deleteAllReminders } from '../actions/ReminderActions';
import Header from './Header';
import AppointmentList from './AppointmentList';
import ReminderList from './ReminderList';
import MyCalendar from './MyCalendar';
import InputMoment from 'input-moment';
import moment, { duration } from 'moment';
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'bootstrap/dist/css/bootstrap.css';
import 'input-moment/dist/input-moment.css'
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import 'react-big-calendar/lib/css/react-big-calendar.css'


class Home extends Component {
    constructor(props) {
        super(props);

        // minimal authenticaion check
        // this will move to a more common area
        if (props.user === null) {
            this.props.history.push('/AppointmentLogin');
        }
    }

    onAddAppointment = (startTime, endTime, patientId, name, reminderBool) => {
        this.props.addAppointment(startTime, endTime, patientId, name, reminderBool);
        let start = moment.unix(startTime).format('MMMM Do, YYYY (hh:mm a)');

        if (this.state.reminderBool === true) {
            let message1 = "Hello " + this.state.name + ". You have an appointment scheduled for " + start + " at the UF Neurosurgery Clinic. Please visit our website (https://brainiacs2020.herokuapp.com/Home) for directions to the clinic.";
            this.props.createReminder(patientId, message1, name);
        }
    }

    onCreateReminder = () => {
        this.props.createReminder(this.state.patientId, this.state.reminderMessage, this.state.name);
    }

    onDeleteAllRem = () =>{
        this.props.deleteAllReminders();
    }

    state = {
        patientId: 0,
        reminderBool: true,
        name: "",
        durration: 15,
        dateTime: moment().add(1, 'hour'),
        phone: "",
        reminderMessage: "This is the test message",
        messageId: ""
    };

    onDateChange = (newDateTime) => {
        //let startTime1 = moment(newDateTime);
        //let endTime1 = moment(newDateTime).add(this.state.durration, 'minutes');

        this.setState({ newDateTime});
    }

    onIDChange = (e) => {
        this.setState({ patientId: e.target.value });
    }

    onIDChangeAux = (e) =>{
        this.setState({ patientId: e.target.value });
    }
    onNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    onReminderChange = (e) => {
        this.setState({ reminderBool: e.target.value });
    }

    onDurrationChange = (e) => {
        this.setState({ durration: e.target.value });
    }

    onMessageChange = (e) => {
        this.setState({ reminderMessage: e.target.value });
    }

    onTypeChange = (e) => {
        this.setState({ type: e.target.value });
    }

    preAdd = () => {
        let endTime = moment(this.state.dateTime).add(this.state.durration, 'minutes');

        this.onAddAppointment(this.state.dateTime.unix(), endTime.unix(), this.state.patientId, this.state.name, this.state.reminderBool);
    }



    renderError = () => {
        if (this.props.appointmentError) {
            return (
                <div className="alert alert-success alert-dismissible">
                    {/*
                    <button className="close" type="button" data-dismiss="alert">
                        <span>&times;</span>
                    </button>
                    */}
                    <strong>Error - </strong> {this.props.appointmentError}
                </div>
            )
        }
    }




    render() {
        let displayTime = this.state.dateTime.format('MMMM Do, YYYY (hh:mm a)');

        return (
            <div>

                <Header />

                <div role="main" className="container-fluid" >

                    {this.renderError()}
                    <p></p><p></p>
                    <p></p>
                    <div className="card">
                        <div className="card-body" style={{ height: '750px', background: '#FFFFFF' }}>
                            <MyCalendar appointments={this.props.appointments} />  </div>
                    </div>
                    <p></p><p></p>
                    <p></p>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Manage Appointments</h5>
                                    <div className="text-right" >
                                        <input className="text-center" type="text" placeholder="Search Patient ID" onChange={this.filterUpdate} />
                                    </div>
                                    <div className="modal fade" id="add-appointment-model" tabIndex="-1" role="dialog">
                                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Add New Appointment</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <InputMoment
                                                                    moment={this.state.dateTime}
                                                                    minStep={1}
                                                                    hourStep={1}
                                                                    onChange={this.onDateChange}
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Patient ID</label>
                                                                    <input type="text" onChange={this.onIDChange} className="form-control" value={this.state.patientId} required />
                                                                    <label>Patient Name</label>
                                                                    <input type="text" onChange={this.onNameChange} className="form-control" value={this.state.name} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Proposed Time</label>
                                                                    <input readOnly type="text" className="form-control" value={displayTime} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Duration</label>
                                                                    <select onChange={this.onDurrationChange} className="form-control" value={this.state.durration}>
                                                                        <option value="15">15 min</option>
                                                                        <option value="30">30 min</option>
                                                                        <option value="45">45 min</option>
                                                                        <option value="60">60 min</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Send patient reminder?:</label>
                                                                    <select onChange={this.onReminderChange} className="form-control" value={this.state.reminderBool}>
                                                                        <option value='true'>Yes</option>
                                                                        <option value='false'>No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                    <button onClick={this.preAdd} type="button" className="btn btn-primary" data-dismiss="modal">Add Appointment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">

                                        <div className="card-header">
                                            My current appointments
                        </div>
                                        <AppointmentList appointments={this.props.appointments} />
                                    </div>
                                    <p></p>
                                    <button className="btn btn-primary" data-toggle="modal" data-target="#add-appointment-model">Add Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Manage Reminders</h5>
                                    <div style={{ display: "flex" }} >
                                        <input className="text-center" style={{ marginRight: "auto" }} type="text" placeholder="Search Patient ID" onChange={this.filterUpdateReminders} />
                                        <button className="btn btn-primary"  style={{ marginLeft: "auto" }} onClick={this.onDeleteAllRem}> Delete All Reminders </button>
                                    </div>
                                    <div className="modal fade" id="add-reminder-model" tabIndex="-1" role="dialog">
                                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Add New Reminder</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Patient ID</label>
                                                                    <input type="text" onChange={this.onIDChangeAux} className="form-control" value={this.state.patientId} required />

                                                                </div>
                                                            </div>
                                                            <div className="col-md-6" >
                                                                <label> Message Body </label>
                                                                <input type="text" style={{ height: '100px' }} onChange={this.onMessageChange} className="form-control" value={this.state.reminderMessage} required />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                    <button onClick={this.onCreateReminder} type="button" className="btn btn-primary" data-dismiss="modal">Send Reminder</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">

                                        <div className="card-header">
                                            Current reminders
                        </div>
                        <ReminderList reminders={this.props.reminders}/>

                                    </div>
                                    <p></p>
                                    <button className="btn btn-primary" data-toggle="modal" data-target="#add-reminder-model">Create Reminder</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        appointments: state.appointments.items,
        appointmentError: state.appointments.error,
        reminders: state.reminders.items1,
        reminderError: state.reminders.error1
    }
};
const mapDispatchToProps = {
    addAppointment, 
    createReminder, 
    deleteAllReminders
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);