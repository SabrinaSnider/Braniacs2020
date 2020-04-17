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
    const [events, setEvents] = useState([])
    const [reminders, setReminders] = useState([])
    const currentUser = props.currentUser;
    const currentId = props.currentId;
    // console.log(currentId);
    // console.log(currentUser);

    // on page load, make a get request for appointments
    useEffect(()=>{
        getMyAppts();
    }, [])

    // function to make a get request for appointments for the given patientID
    // appointments are sorted based on start date
    const getMyAppts = async() => {
        axios.post("/appt/list/my-appointments", {
            patientId: parseInt(currentId),
        })
        .then(function (response) {
            //console.log("response is", response.data)
            var appointments = response.data.map(formatAppt)
            var events = response.data.map(formatEvent)

            events.sort(function(a,b){
                return a.start - b.start;
            })

            setAppts(appointments)
            setEvents(events)
        })
        .catch(function (error) {
          console.log(error);
        });

        axios.post("/reminder/list/byId", {
            patientId: parseInt(currentId),
        })
        .then(function (response) {
            //console.log("reminder response is", response.data)
            var reminders1 = response.data.map(formatReminder)

            setReminders(reminders1)
        })
        .catch(function (error) {
          console.log(error);
        });
    }


    const formatReminder = reminder => {
        var formatted = {
           timeStamp: reminder.timeStamp,
           name: reminder.name,
           reminderMessage: reminder.reminderMessage
        };
        return formatted
    }
    // fuction to format appointments for the calendar event array 
    const formatAppt = appointment => {
        
        var formatted = {
            name: appointment.name,
            startTime: appointment.startTime,
            endTime: appointment.endTime
        };
        return formatted
    }

    const formatEvent = appointment => {
     
        var start = new Date(moment.unix(appointment.startTime).toDate());
        var end = new Date(moment.unix(appointment.endTime).toDate());

        var formatted = {
            title: appointment.name,
            start, 
            end
        };
        return formatted
    }
    // formatting the time of each event to be in ##:## AM - ##:## PM format
    const formatDate = date => {
        return date
    }

    // function to remove an appointment from the front-end array and back-end database
    const deleteAppt = (appointment) => {
        // remove from front-end
        const filteredAppts = appts.filter((item) => {
            // return true if start or end time is different
            return (item.startTime !== appointment.startTime || (item.endTime !== appointment.endTime))
        });
        setAppts(filteredAppts)

        // delete the appointment with the following patientId and times from the database
        // Date object must be converted to a "unix moment," then formatted to the below string
        axios.delete("/appt/remove-appt", {
            data: {
                patientId: parseInt(450),
                startTime: formatDate(appointment.startTime),
                endTime: formatDate(appointment.endTime)
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // function to render a component for each listed appointment. Taken largely from the admin page.
    const renderAppt = (appointment) => {
        let startTime1 = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
        let endTime1 = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');
        return (
            <li key={appointment.startTime} className="list-group-item">
                <div style={{'clear': 'both'}}>
                    <strong> Name: </strong>
                    <span>{appointment.name}</span>
                    <Button onClick={() => deleteAppt(appointment)} variant="danger" style={{"float": "right"}}>delete</Button>
                </div>
                <div style={{'maxWidth': '100%'}}>
                    <strong> Start: </strong>
                    <span>{startTime1}</span>
                    <span> - </span>
                    <strong> End: </strong>
                    <span>{endTime1}</span>
                </div>
            </li>
        );
    }
    
    const renderReminder = (reminder) => {
        let time = moment.unix(reminder.timeStamp).format('MMMM Do, YYYY (hh:mm a)');

        return (
            <li key={reminder.timeStamp} className="list-group-item">
				<strong> Name: </strong>
                <span>{reminder.name}</span>
                <strong> Reminder Message: </strong>
                <span>{reminder.reminderMessage}</span>
                <strong> Reminder Sent at: </strong>
                <span>{time}</span>
            </li>
        );
    }

    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="/#">Appointment and Reminder Management</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
    </nav>
        <div role="main" className="container-fluid" >
        <div className="col-sm-12">
                    <div className="card">
                    <ScheduleCalendar 
                        events = {events}
                    />
            </div>
            </div>
            <p></p><p></p>
            <div className="row">
                        <div className="col-sm-6">                
                        <Card>
                    <Card.Header className="appointment-header" style={{'textAlign': 'center'}}>Appointment List</Card.Header>
                    <div className="card-body overflow-auto" style={{ height: '500px'}}>
                        {(appts !== undefined && appts.length != 0) &&
                            <ul style={{'padding': '0px', 'margin': '0px'}}>
                                {appts.map(renderAppt)}
                            </ul>
                        }    
                    </div>
                </Card>
                </div>
                <div className="col-sm-6">  
                <Card >
                    <Card.Header className="appointment-header" style={{'textAlign': 'center'}}>Reminders</Card.Header>
                    <div className="card-body overflow-auto" style={{ height: '500px'}}>
                        {(reminders !== undefined && reminders.length != 0) &&
                            <ul style={{'padding': '0px', 'margin': '0px'}}>
                                {reminders.map(renderReminder)}
                            </ul>
                        }    
                    </div>
                </Card>
            </div>
            </div>
        </div>
        </div>
    );
}

export default AppointmentPage;
