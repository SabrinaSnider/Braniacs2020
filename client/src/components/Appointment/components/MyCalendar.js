import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import * as dates from '../modules/dates'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)
let sampleAppoint = [];

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
	React.cloneElement(React.Children.only(children), {
		style: {
			backgroundColor: 'lightblue',
		},
	})


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
			
			<Calendar
				events={this.myEventsList}
				views={allViews}
				step={60}
				showMultiDayTimes
				max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
				defaultDate={new Date(moment().toDate())}
				components={{
					timeSlotWrapper: ColoredDateCellWrapper,
				}}
				localizer={localizer}
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