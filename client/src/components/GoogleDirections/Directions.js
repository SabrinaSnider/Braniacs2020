import React from 'react'
import { Table } from 'react-bootstrap'
import './Directions.css'

/*
    Parses the directions prop and puts them in a component. The time and
    distance of the route are displayed at the top, while the directions are 
    displayed in a table.
*/
const Directions = (props) => {
    // removes html styling from text
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

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
                    <h3 className="directions-header">Time Estime: {props.directions.routes[0].legs[0].duration.text}.</h3>
                    <h3 className="directions-header">Distance: {props.directions.routes[0].legs[0].distance.text}.</h3>
                </div>
                <Table bordered hover>
                    <tbody>
                    {
                        props.directions &&
                        props.directions.routes[0].legs[0].steps.map((element, index) => {
                            let step = element.instructions.replace(/<\/?[^>]+(>|$)/g, " ")
                            let decodedStep = decodeHtml(step)
                            let distance = element.distance.text

                            return (
                                <tr key={index}>
                                    <td>{decodedStep} for {distance}.</td>
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
