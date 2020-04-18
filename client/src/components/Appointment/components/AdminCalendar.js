import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Popover, OverlayTrigger, Modal, Button } from 'react-bootstrap'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { deleteAppointment } from '../actions/AppointmentsActions';
import { updateDate } from '../actions/DateActions';

import 'bootstrap/dist/css/bootstrap.css';
import 'input-moment/dist/input-moment.css'
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const localizer = momentLocalizer(moment)
let sampleAppoint = [];

// return the calendar with the given events
// The event value under components determines how events are rendered on the calendar
class AdminCalendar extends Component {
	myEventsList = [];


	onDeleteAppointment = (appointmentStartTime) => {
		this.props.deleteAppointment(appointmentStartTime);
	}
	
	formatEvents = (appointment) => {
		var start1 = new Date(moment.unix(appointment.startTime).toDate());
		var end1 = new Date(moment.unix(appointment.endTime).toDate());
	
			sampleAppoint = {
				id: appointment.patientId,
				title: appointment.name,
				start: start1,
				end: end1, 
				id: appointment.startTime, 
				tooltip: appointment.patientId
			}
			this.myEventsList.push(sampleAppoint);
	
	}

	EventRenderer = (event) => {
		
		
		const formatDate = date => {
			var hour = date.getHours()
			var minute = date.getMinutes()
			if (minute === 1 || minute === 2 ||minute === 3 ||minute === 4 ||minute === 5){
				minute = minute + "0";
			}
			if (minute === 0){
				minute = minute + "0";
			}
			var suffix = "AM"
	
			if (hour > 12) {
				hour = hour - 12
				suffix = "PM"
			}
	
			return hour + ":" + minute + " " + suffix
		}
	
		var start = formatDate(event.event.start)
		var end = formatDate(event.event.end)


		var popup = (
			<Popover style={{zIndex:10000}}>
		<ul className="list-group">

		<li key={start} className="list-group-item">
		<strong>Patient ID: </strong>
		<span>{event.event.tooltip}</span>
		<strong> Appointment Title: </strong>
		<span>{event.event.title}</span>
		<strong> Starting Time: </strong>
		<span>{start}</span>
		<span> - </span>
		<strong> Ending Time: </strong>
		<span>{end}</span>
		<button onClick={this.onDeleteAppointment.bind(this, event.event.id)} className="btn btn-sm btn-warning float-right">Delete</button>
		</li>
		</ul>			
		</Popover>
		);
	
		return (
			<div>
				<OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popup}>
					<div>{event.event.title}</div>
				</OverlayTrigger>
			</div>
		);
	}

	


	render () {		
		this.myEventsList = [];
		{this.props.appointments.map(this.formatEvents)}

			return (
			<div>
				<Calendar
					selectable
					popup
					date={this.props.date}
					localizer={localizer}
					events={this.myEventsList}
					startAccessor="start"
					endAccessor="end"
					tooltipAccessor="tooltip"
					resourceIdAccessor="id"
					onNavigate={x => this.props.updateDate(x)}
					components={{
						event: this.EventRenderer
					}}
				/>
			</div>
		);
			}
}


const mapStateToProps = (state) => {
    return {
		appointments: state.appointments.items,
		date: state.date
    }
};

export default connect(mapStateToProps, {
	deleteAppointment,
	updateDate
})(AdminCalendar);