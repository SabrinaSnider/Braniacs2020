import React from 'react'
import { Table } from 'react-bootstrap'
import './Directions.css'

/*
    Parses the directions prop and puts them in a component. The time and
    distance of the route are displayed at the top, while the directions are 
    displayed in a table.
*/
const Directions = (props) => {
    if (props.directions == null || props.directions.routes[0].legs[0].steps == null) {
        return (
            <div>
                No instructions found
            </div>
        )
    } else {
        return (
            <div>
                <div className="directions-section">
                    <h3 className="directions-header">Time Estimate: {props.directions.routes[0].legs[0].duration.text}.</h3>
                    <h3 className="directions-header">Distance: {props.directions.routes[0].legs[0].distance.text}.</h3>
                </div>
                <Table bordered hover>
                    <tbody>
                    {
                        props.directions &&
                        props.directions.routes[0].legs[0].steps.map((element, index) => {
                            let step = element.instructions.replace(/<\/?[^>]+(>|$)/g, "")
                            step = step.replace("&nbsp;", " ")
                            step = step.replace("Pass", ". Pass")

                            let distance = element.distance.text
                            let maneuver = element.maneuver
                            let conjunction = "for"

                            // make in say "in {distance}" if turning
                            if (maneuver === "turn-left" || maneuver === "turn-right") {
                                conjunction = "in"
                            }

                            let parsedStep = step + " " + conjunction + " " + distance

                            // parsing if destination sentence it at the end
                            if (step.includes("Destination")) {
                                parsedStep = step.replace("Destination", conjunction + " " + distance + ". Destination")
                            }

                            // parsing if "pass by" sentence is at the end
                            if (step.includes("Pass")) {
                                parsedStep = step.replace("Pass", conjunction + " " + distance + ". Pass")
                            }

                            parsedStep += "."
                            
                            return (
                                <tr key={index}>
                                    <td>{parsedStep}</td>
                                </tr>
                            )
                    })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Directions
