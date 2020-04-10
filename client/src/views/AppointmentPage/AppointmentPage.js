import React from 'react'
import { Card } from 'react-bootstrap'
import './AppointmentPage.css'
import ScheduleCalendar from '../../components/Calendar/ScheduleCalendar'

/*
    Appointment page. Reroutes to different components together with the navbar.
*/
function AppointmentPage(props) {

    return (
        <div id="appointment-page-container">
            <Card id="appointment-calendar-container">
                <ScheduleCalendar />
            </Card>
        </div>
    );
}

export default AppointmentPage;
