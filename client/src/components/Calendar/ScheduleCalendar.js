import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment) 

var onClick = (props) => {
    console.log("click event!")
}

const ScheduleCalendar = props => {
    console.log("events are", props.events)
    return (
        <Calendar
            date={new Date()}
            localizer={localizer}
            events={props.events}
            startAccessor="start"
            endAccessor="end"
            onNavigate={date => this.setState({ date })}
            onSelectEvent={onClick}
        />
    )
}

export default ScheduleCalendar