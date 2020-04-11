import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import './AppointmentPage.css'
import moment from 'moment'
import ScheduleCalendar from '../../components/Calendar/ScheduleCalendar'

/*
    Appointment page.

    Event item default format:
    Event {
        title: string,
        start: Date,
        end: Date,
        allDay?: boolean
        resource?: any,
    }
*/

function AppointmentPage(props) {
    const [appts, setAppts] = useState([])
    const [eventAppts, setEventAppts] = useState([])

    useEffect(()=>{
        getMyAppts();
    }, [])

    useEffect(()=>{
        setEventAppts(appts.map(formatApptEvent))
    }, [appts])

    const getMyAppts = async() => {
        axios.post("/appt/list/my-appointments", {
            patientId: 123,
        })
        .then(function (response) {
            console.log("response is", response.data)
            setAppts(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const formatApptEvent = appointment => {
        var start = new Date(moment(appointment.startTime, 'MMMM Do, YYYY (hh:mm a)').toDate());
        var end = new Date(moment(appointment.startTime, 'MMMM Do, YYYY (hh:mm a)').toDate());

        var formatted = {
            title: appointment.name,
            start: start,
            end: end
        };
        console.log("formatted event:", formatted)
        return formatted
    }

    const renderAppt = (appointment) => {
        return (
            <li key={appointment.patientId} class="list-group-item">
                <strong> Starting Time: </strong>
                <span>{appointment.startTime}</span>
                <span> - </span>
                <strong> Ending Time: </strong>
                <span>{appointment.endTime}</span>
            </li>
        );
    }

    return (
        <div id="appointment-page-container">
            <Card id="appointment-calendar-container">
                    <ScheduleCalendar 
                        events = {eventAppts}
                    />
            </Card>
            <div className="appointment-content-row">
                <Card id="appointment-page-list" style={{'padding': '0px'}}>
                    <Card.Header className="appointment-header">Appointment List</Card.Header>
                    <div>
                        {(appts !== undefined && appts.length != 0) &&
                            <ul style={{'padding': '0px', 'margin': '0px'}}>
                                {appts.map(renderAppt)}
                            </ul>
                        }    
                    </div>
                </Card>
                <Card id="appointment-page-reminders" style={{'padding': '0px'}}>
                    <Card.Header className="appointment-header">Reminders</Card.Header>
                </Card>
            </div>
        </div>
    );
}

export default AppointmentPage;
