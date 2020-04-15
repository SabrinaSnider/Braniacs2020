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
        // old date format
        // var start = new Date(moment(appointment.startTime, 'MMMM Do, YYYY (hh:mm a)').toDate());
        // var end = new Date(moment(appointment.endTime, 'MMMM Do, YYYY (hh:mm a)').toDate());

        var start = new Date(moment.unix(appointment.startTime).toDate());
        var end = new Date(moment.unix(appointment.endTime).toDate());

        var formatted = {
            title: appointment.name,
            start: start,
            end: end
        };
        return formatted
    }

    // formatting the time of each event to be in ##:## AM - ##:## PM format
    const formatDate = date => {
        return moment(date).format('MMMM Do, YYYY (hh:mm a)')
    }

    // function to remove an appointment from the front-end array and back-end database
    const deleteAppt = (appointment) => {
        // remove from front-end
        const filteredAppts = appts.filter((item) => {
            // return true if start or end time is different
            return (item.start.getTime() !== appointment.start.getTime()) || (item.end.getTime() !== appointment.end.getTime())
        });
        setAppts(filteredAppts)

        // delete the appointment with the following patientId and times from the database
        // Date object must be converted to a "unix moment," then formatted to the below string
        axios.delete("/appt/remove-appt", {
            data: {
                patientId: 450,
                startTime: formatDate(appointment.start),
                endTime: formatDate(appointment.end)
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // function to render a component for each listed appointment. Taken largely from the admin page.
    const renderAppt = (appointment) => {
        return (
            <li key={appointment.patientId} className="list-group-item">
                <div style={{'clear': 'both'}}>
                    <strong> Name: </strong>
                    <span>{appointment.title}</span>
                    <Button onClick={() => deleteAppt(appointment)} variant="danger" style={{"float": "right"}}>delete</Button>
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
