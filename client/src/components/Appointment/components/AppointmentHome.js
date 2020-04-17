import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAppointment, searchAppointment, fillAppointments } from '../actions/AppointmentsActions';
import { createReminder, deleteAllReminders, searchReminder, fillReminders } from '../actions/ReminderActions';
import {fillPatients} from '../actions/PatientActions';
import Header from './Header';
import AppointmentList from './AppointmentList';
import ReminderList from './ReminderList';
import PatientIdList from './PatientIdList'
import MyCalendar from './MyCalendar';
import InputMoment from 'input-moment';
import moment, { duration } from 'moment';
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'bootstrap/dist/css/bootstrap.css';
import 'input-moment/dist/input-moment.css'
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js"
import 'react-big-calendar/lib/css/react-big-calendar.css'


class AppointmentHome extends Component {
    constructor(props) {
        //loginUser();
        super(props);
        this.props.fillPatients();
        this.props.fillAppointments();
        console.log("From AppointmentsHome.js",this.props.appointments);
        this.props.fillReminders();
        
        console.log("Patients from AppointmentsHome.js", this.props.patients)
    }


    onAddAppointment = (startTime, endTime, patientId, name, reminderBool) => {
        this.props.addAppointment(startTime, endTime, patientId, name, reminderBool);

        let startRem = moment.unix(startTime).format('MMMM Do, YYYY (hh:mm a)');
        if (reminderBool === true) {
            let message1 = "Hello " + name + ". You have an appointment scheduled for " + startRem + " at the UF Neurosurgery Clinic. Please visit our website (https://brainiacs2020.herokuapp.com/Home) for directions to the clinic.";
            this.props.createReminder(patientId, name, this.props.patient[0].phone, message1);
        }
    }

    onAddAppointmentNoAcc = (startTime, endTime, patientId, name, reminderBool, phone) => {
        this.props.addAppointment(startTime, endTime, patientId, name, reminderBool);

        let startRem2 = moment.unix(startTime).format('MMMM Do, YYYY (hh:mm a)');
        if (reminderBool === true) {
            let message2 = "Hello " + name + ". You have an appointment scheduled for " + startRem2 + " at the UF Neurosurgery Clinic. Please visit our website (https://brainiacs2020.herokuapp.com/Home) for directions to the clinic.";
            this.props.createReminder(patientId, name, phone, message2);
        }
    }


    onCreateReminder = () => {
        this.props.createReminder(this.props.patient[0].patientId, this.props.patient[0].name.first, this.props.patient[0].phone, this.state.reminderMessage);
    }

    onCreateReminderNoAcc = () => {
        this.props.createReminder(this.state.patientId, this.state.name, this.state.phone, this.state.reminderMessage);
    }

    onDeleteAllRem = () => {
        this.props.deleteAllReminders();
    }

    onSearchAppointment = () => {
        this.props.searchAppointment(this.state.searchApptId);
    }

    onSearchAppointmentAux = () => {
        this.props.fillAppointments();
        this.setState({ searchApptId: "c" });

    }

    onSearchReminder = () => {
        this.props.searchReminder(this.state.searchRemId);
    }

    onSearchReminderAux = () => {
        this.props.fillReminders();
        this.setState({ searchApptId: "c" });

    }

    state = {
        reminderBool: true,
        name: "",
        durration: 15,
        dateTime: moment().add(1, 'hour'),
        phone: "",
        reminderMessage: "This is the test message",
        messageId: "",
        phone: "",
        searchApptId: "c",
        searchRemId: "c",

    };

    onDateChange = (newDateTime) => {
        //let startTime1 = moment(newDateTime);
        //let endTime1 = moment(newDateTime).add(this.state.durration, 'minutes');

        this.setState({ newDateTime });
    }

    onSearchAppointmentChange = (e) => {
        let apptId = JSON.parse(e.target.value);
        this.setState({ searchApptId:  apptId});
    }

    onSearchReminderChange = (e) => {
        let remId = JSON.parse(e.target.value);
        this.setState({ searchRemId: remId });
    }

    onIDChange = (e) => {
        this.setState({ patientId: parseInt(e.target.value) });
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    onPhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    }

    onPatientChange = () => {
        this.setState({ name: this.props.patient[0].name.first });
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
        this.onAddAppointment(this.state.dateTime.unix(), endTime.unix(), this.props.patient[0].patientId, this.props.patient[0].name.first, this.state.reminderBool);
    }

    preAddNoAcc = () => {
        let endTime = moment(this.state.dateTime).add(this.state.durration, 'minutes');
        this.onAddAppointmentNoAcc(this.state.dateTime.unix(), endTime.unix(), this.state.patientId, this.state.name, this.state.reminderBool, this.state.phone);
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
                    <div className="row">

                        <div className="col-sm-12">
                            <div className="card">

                                <div className="card-body">
                                    <MyCalendar appointments={this.props.appointments} />  </div>
                            </div>
                        </div>
                    </div>
                    <p></p><p></p>
                    <p></p>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Manage Appointments </h5>
                                    <hr></hr>

                                    <div className="row">
                                        <div className="col-sm-7">
                                            <input className="text-center" type="text" placeholder="Search Patient ID" onChange={this.onSearchAppointmentChange} />
                                        </div>
                                        <div className="col-sm-2">
                                        <button onClick={this.onSearchAppointment} type="button " className="btn btn-sm btn-primary " data-dismiss="modal">Search</button>
                                    </div>

                                    <div className="col-sm-3">
                                        <button onClick={this.onSearchAppointmentAux} type="button" className="btn  btn-sm btn-secondary " data-dismiss="modal">Clear Search</button>
                                    </div>
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
                                                                <PatientIdList patients={this.props.patients} onChange={this.onPatientChange} />

                                                            </div>
                                                            <p></p>
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
                                                <button type="button" className="btn btn-secondary " data-dismiss="modal">Cancel</button>
                                                <button onClick={this.preAdd} type="button" className="btn btn-primary" data-dismiss="modal">Add Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade" id="add-appointment-model2" tabIndex="-1" role="dialog">
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
                                                                <label>Patient Phone</label>
                                                                <input type="text" onChange={this.onPhoneChange} className="form-control" value={this.state.phone} />
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
                                                                <select onChange={this.onReminderChange} class="form-control" value={this.state.reminder}>
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
                                                <button onClick={this.preAddNoAcc} type="button" className="btn btn-primary" data-dismiss="modal">Add Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3 overflow-auto">

                                    <div className="card-header">
                                        Current appointments
                        </div>
                                    <div className="card-body overflow-auto" style={{ height: '500px' }}>
                                        
                                        <AppointmentList />
                                    </div>
                                </div>
                                <p></p>
                                <button className="btn btn-primary" data-toggle="modal" data-target="#add-appointment-model">Add Appointment (Existing Online Account)</button>
                                <p></p>
                                <button className="btn btn-primary" data-toggle="modal" data-target="#add-appointment-model2">Add Appointment (No Account)</button>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" style={{ marginRight: "auto" }} >Manage Reminders</h5>
                                <hr></hr>

                                <p></p>
                                <div className="row">
                                        <div className="col-sm-7">
                                        <input className="text-center" type="text" placeholder="Search Patient ID" onChange={this.onSearchReminderChange} />
                                        </div>
                                        <div className="col-sm-2">
                                        <button onClick={this.onSearchReminder} type="button " className="btn btn-sm btn-primary " data-dismiss="modal">Search</button>
                                    </div>

                                    <div className="col-sm-3">
                                        <button onClick={this.onSearchReminderAux} type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Clear Search</button>
                                    </div>
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
                                                                <ul className="list-group">
                                                                    <PatientIdList patients={this.props.patients} onChange={this.onPatientChange} />
                                                                </ul>
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
                                <div className="modal fade" id="add-reminder-model2" tabIndex="-1" role="dialog">
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
                                                                <input type="text" onChange={this.onIDChange} className="form-control" value={this.state.patientId} required />
                                                                <label>Patient Name</label>
                                                                <input type="text" onChange={this.onNameChange} className="form-control" value={this.state.name} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Patient Phone</label>
                                                                <input type="text" onChange={this.onPhoneChange} className="form-control" value={this.state.phone} />
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
                                                <button onClick={this.onCreateReminderNoAcc} type="button" className="btn btn-primary" data-dismiss="modal">Send Reminder</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3 overflow-auto">

                                    <div className="card-header">

                                        Current reminders
                                        <button className="btn btn-sm btn-danger float-right" style={{ marginLeft: "auto" }} onClick={this.onDeleteAllRem}> Delete All Reminders </button>
                                    </div>
                                    <div className="card-body overflow-auto" style={{ height: '500px' }}>

                                        <ReminderList reminders={this.props.reminders} />
                                    </div>

                                </div>
                                <p></p>
                                <button className="btn btn-primary" data-toggle="modal" data-target="#add-reminder-model">Create Reminder (Existing Online Account)</button>
                                <p></p>
                                <button className="btn btn-primary" data-toggle="modal" data-target="#add-reminder-model2">Create Reminder (No Account) </button>

                            </div>
                        </div>
                    </div>

                </div>


            </div>

            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appointments: state.appointments.items,
        appointmentError: state.appointments.error,
        reminders: state.reminders.items1,
        reminderError: state.reminders.error1,
        patients: state.patients.items3,
        patient: state.patients.patient,
        patientError: state.reminders.error1
    }
};
const mapDispatchToProps = {
    addAppointment,
    createReminder,
    deleteAllReminders,
    searchAppointment,
    searchReminder,
    fillAppointments,
    fillReminders,
    fillPatients
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentHome);