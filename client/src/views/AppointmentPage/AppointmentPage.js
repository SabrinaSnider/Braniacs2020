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
            patientId: 450,
        })
        .then(function (response) {
            console.log("response is", response.data)
            var appointments = response.data

            appointments.sort(function(a,b){
                var start_a = new Date(moment(a.startTime, 'MMMM Do, YYYY (hh:mm a)').toDate());
                var start_b = new Date(moment(b.startTime, 'MMMM Do, YYYY (hh:mm a)').toDate());
                return start_a - start_b;
            })

            setAppts(appointments)
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
        return formatted
    }

    const renderAppt = (appointment) => {
        return (
            <li key={appointment.patientId} className="list-group-item">
                <div style={{'clear': 'both'}}>
                    <strong> Name: </strong>
                    <span>{appointment.name}</span>
                </div>
                <div style={{'maxWidth': '100%'}}>
                    <strong> Start: </strong>
                    <span>{appointment.startTime}</span>
                    <span> - </span>
                    <strong> End: </strong>
                    <span>{appointment.endTime}</span>
                </div>
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
                    <Card.Header className="appointment-header" style={{'textAlign': 'center'}}>Appointment List</Card.Header>
                    <div>
                        {(appts !== undefined && appts.length != 0) &&
                            <ul style={{'padding': '0px', 'margin': '0px'}}>
                                {appts.map(renderAppt)}
                            </ul>
                        }    
                    </div>
                </Card>
                <Card id="appointment-page-reminders" style={{'padding': '0px'}}>
                    <Card.Header className="appointment-header" style={{'textAlign': 'center'}}>Reminders</Card.Header>
                </Card>
            </div>
        </div>
    );
}

export default AppointmentPage;
