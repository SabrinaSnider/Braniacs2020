import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment) 

// component renderer for each calendar event
const EventRenderer = (event) => {
    // formatting the time of each event to be in ##:## AM - ##:## PM format
    const formatDate = date => {
        var hour = date.getHours()
        var minute = date.getMinutes()
        var suffix = "AM"

        if (hour > 12) {
            hour = hour - 12
            suffix = "PM"
        }

        return hour + ":" + minute + " " + suffix
    }

    var start = formatDate(event.event.start)
    var end = formatDate(event.event.end)

    // popup component
    var popup = (
        <Popover style={{zIndex:10000}}>
            <strong>Start: </strong> {start} - <strong>End: </strong> {end}
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


// return the calendar with the given events
// The event value under components determines how events are rendered on the calendar
const ScheduleCalendar = props => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <Calendar
                selectable
                popup
                date={date}
                localizer={localizer}
                events={props.events}
                startAccessor="start"
                endAccessor="end"
                onNavigate={x => setDate(x)}
                components={{
                    event: EventRenderer
                }}
            />
        </div>
    )
}

export default ScheduleCalendar