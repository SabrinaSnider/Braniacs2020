import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import * as dates from '../modules/dates'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)
let sampleAppoint = [];
let myEventsList = [];

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
	React.cloneElement(React.Children.only(children), {
		style: {
			backgroundColor: 'lightblue',
		},
	})


class MyCalendar extends Component {

	render() {
		this.props.appointments.forEach((appointment) => {
			var start1 = new Date(moment(appointment.startTime, 'MMMM Do, YYYY (hh:mm a)').toDate());
			var end1 = new Date(moment(appointment.startTime, 'MMMM Do, YYYY (hh:mm a)').toDate());
			console.log(start1);

			sampleAppoint = {
				id: appointment.patientId,
				title: appointment.name,
				start: start1,
				end: end1
			};

			myEventsList.push(sampleAppoint);
		})

		return (
			<Calendar
				events={myEventsList}
				views={allViews}
				step={60}
				showMultiDayTimes
				max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
				defaultDate={new Date(2015, 3, 1)}
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