import React from 'react'
import { withGoogleMap } from "react-google-maps"

// maybe add restriction to map to limit panning later
const Instructions = (props) => {
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    if (props.directions == null || props.directions.routes[0].legs[0].steps == null) {
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div>
                <p style={{textAlign: 'left'}}>{
                    props.directions &&
                    props.directions.routes[0].legs[0].steps.map((element, index) => {
                        let step = element.instructions.replace(/<\/?[^>]+(>|$)/g, " ")
                        let decodedStep = decodeHtml(step)
                        return <li key={index}>{decodedStep}</li>;
                    })
                }</p>
            </div>
        )
    }
}

export default Instructions
