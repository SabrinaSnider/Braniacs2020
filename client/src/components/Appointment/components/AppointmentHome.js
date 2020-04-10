import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions/AppointmentsActions';
import { createReminder } from '../actions/ReminderActions';
import Header from './Header';
import AppointmentList from './AppointmentList';
import ReminderList from './ReminderList';
import MyCalendar from './MyCalendar';
import InputMoment from 'input-moment';
import moment, { duration } from 'moment';
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

    onAddAppointment = (startTime, endTime, patientId, name, reminder) => {
        this.props.addAppointment(startTime, endTime, patientId, name, reminder);
    }

    onCreateReminder = (dateTime, patientId, message) => {
        this.props.createReminder(dateTime.subtract(1, 'hour'), patientId, message);
    }

    state = {
        patientId: 0,
        reminder: null,
        startTime: moment(),
        endTime: moment(),
        name: "",
        durration: 15,
        dateTime: moment().add(1, 'hour'),
        message: ""
    };

    onDateChange = (newDateTime) => {
        let startTime1 = moment(newDateTime);
        let endTime1 = moment(newDateTime).add(this.state.durration, 'minutes');

        this.setState({ startTime: startTime1, endTime: endTime1 });
    }

    onIDChange = (e) => {
        this.setState({ patientId: e.target.value });
    }
    onNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    onReminderChange = (e) => {
        this.setState({ reminder: e.target.value });
    }

    onDurrationChange = (e) => {
        this.setState({ durration: e.target.value });
    }



    preAdd = () => {
        this.onAddAppointment(this.state.startTime.unix(), this.state.endTime.unix(), this.state.patientId, this.state.name, this.state.reminder);
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
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Manage Appointments</h5>
                                    <div class="text-right" >
                                        <input class="text-center" type="text" placeholder="Search Patient ID" onChange={this.filterUpdate} />
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
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">Manage Reminders</h5>
                                    <div class="text-right" >
                                        <input class="text-center" type="text" placeholder="Search Patient ID" onChange={this.filterUpdateReminders} />
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
                                                    <button onClick={this.createReminder} type="button" className="btn btn-primary" data-dismiss="modal">Add Appointment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">

                                        <div className="card-header">
                                            Current reminders
                        </div>
                                        <AppointmentList appointments={this.props.appointments} />
                                    </div>
                                    <p></p>
                                    <button className="btn btn-primary" data-toggle="modal" data-target="#add-appointment-model">Create Reminder</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <p></p><p></p>
                        <p></p>
                        <div class="card">
  <div class="card-body" style={{height: '500px', background: '#FFFFFF'}}>
  <MyCalendar appointments={this.props.appointments} />  </div>
</div>
                        <p></p><p></p>
                        <p></p>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        appointments: state.appointments.itemsAppt,
        appointmentError: state.appointments.error,
        reminder: state.appointments.itemsRem,
    }
};

export default connect(mapStateToProps, {
    addAppointment,
    createReminder
})(Home);