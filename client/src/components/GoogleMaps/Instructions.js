import React from 'react'

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
                    props.directions.routes[0].legs[0].steps.map(element => {
                        let step = element.instructions.replace(/<\/?[^>]+(>|$)/g, " ")
                        let decodedStep = decodeHtml(step)
                        return <li>{decodedStep}</li>;
                    })
                }</p>
            </div>
        )
    }
}

export default Instructions
