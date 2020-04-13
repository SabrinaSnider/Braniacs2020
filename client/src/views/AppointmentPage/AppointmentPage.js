import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
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

    // on page load, make a get request for appointments
    useEffect(()=>{
        getMyAppts();
    }, [])

    // function to make a get request for appointments for the given patientID
    // appointments are sorted based on start date
    const getMyAppts = async() => {
        axios.post("/appt/list/my-appointments", {
            patientId: 450,
        })
        .then(function (response) {
            console.log("response is", response.data)
            var appointments = response.data.map(formatAppt)

            appointments.sort(function(a,b){
                return a.start - b.start;
            })

            setAppts(appointments)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // fuction to format appointments for the calendar event array 
    const formatAppt = appointment => {
        var start = new Date(moment(appointment.startTime, 'MMMM Do, YYYY (hh:mm a)').toDate());
        var end = new Date(moment(appointment.endTime, 'MMMM Do, YYYY (hh:mm a)').toDate());

        var formatted = {
            title: appointment.name,
            start: start,
            end: end
        };
        return formatted
    }

    // formatting the time of each event to be in ##:## AM - ##:## PM format
    const formatDate = date => {
        var year = date.getYear()
        var month = date.getMonth()
        var day = date.getDay()
        var hour = date.getHours()
        var minute = date.getMinutes()
        var suffix = "AM"

        if (hour > 12) {
            hour = hour - 12
            suffix = "PM"
        }

        var date = month + "/" + day + "/" + year
        var time = hour + ":" + minute + " " + suffix
        return date + " " + time
    }

    // function to render a component for each listed appointment. Taken largely from the admin page.
    const renderAppt = (appointment) => {
        return (
            <li key={appointment.patientId} className="list-group-item">
                <div style={{'clear': 'both'}}>
                    <strong> Name: </strong>
                    <span>{appointment.title}</span>
                </div>
                <div style={{'maxWidth': '100%'}}>
                    <strong> Start: </strong>
                    <span>{formatDate(appointment.start)}</span>
                    <span> - </span>
                    <strong> End: </strong>
                    <span>{formatDate(appointment.end)}</span>
                </div>
            </li>
        );
    }

    return (
        <div id="appointment-page-container">
            <Card id="appointment-calendar-container">
                    <ScheduleCalendar 
                        events = {appts}
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
