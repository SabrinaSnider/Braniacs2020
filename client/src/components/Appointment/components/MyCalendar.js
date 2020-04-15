import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import ScheduleCalendar from '../../Calendar/ScheduleCalendar'

let sampleAppoint = [];


class MyCalendar extends Component {
	myEventsList = [];

	renderAppointment = (appointment) => {
        var start1 = new Date(moment.unix(appointment.startTime).toDate());
		var end1 = new Date(moment.unix(appointment.endTime).toDate());

			sampleAppoint = {
				id: appointment.patientId,
				title: appointment.name,
				start: start1,
				end: end1
			}
			this.myEventsList.push(sampleAppoint);
	}

	render() {
		this.myEventsList = [];
		{this.props.appointments.map(this.renderAppointment)}

		return (
			
			<ScheduleCalendar 
                        events = {this.myEventsList}
                    />
		);
	}
}

const mapStateToProps = (state) => {
	return {

	}
};

export default connect(mapStateToProps, {

})(MyCalendar);