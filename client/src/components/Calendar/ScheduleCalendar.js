import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment) 

var onClick = (props) => {
    console.log("click event!")
}

const ScheduleCalendar = props => {
    const [date, setDate] = useState(new Date())
    return (
        <Calendar
            date={date}
            localizer={localizer}
            events={props.events}
            startAccessor="start"
            endAccessor="end"
            onNavigate={x => setDate(x)}
            onSelectEvent={onClick}
        />
    )
}

export default ScheduleCalendar