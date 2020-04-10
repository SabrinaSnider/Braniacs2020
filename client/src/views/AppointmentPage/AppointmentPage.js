import React from 'react'
import { Card } from 'react-bootstrap'
import './AppointmentPage.css'
import ScheduleCalendar from '../../components/Calendar/ScheduleCalendar'

/*
    Appointment page. Reroutes to different components together with the navbar.

    Event item default format:
    Event {
        title: string,
        start: Date,
        end: Date,
        allDay?: boolean
        resource?: any,
    }
*/

var events = [
    {
      'title': 'All Day Event very long title',
      'allDay': true,
      'start': new Date(2020, 3, 1),
      'end': new Date(2020, 3, 1)
    },
    {
      'title': 'Long Event',
      'start': new Date(2020, 3, 10, 10),
      'end': new Date(2020, 3, 10, 12)
    }
]
function AppointmentPage(props) {
    return (
        <div id="appointment-page-container">
            <Card id="appointment-calendar-container">
                    <ScheduleCalendar 
                        events = {events}
                    />
            </Card>
            <div className="appointment-content-row">
                <Card id="appointment-page-list">
                    <h2 className="appointment-header">Appointment List</h2>
                </Card>
                <Card id="appointment-page-reminders">
                    <h2 className="appointment-header">Reminders</h2>
                </Card>
            </div>
        </div>
    );
}

export default AppointmentPage;
