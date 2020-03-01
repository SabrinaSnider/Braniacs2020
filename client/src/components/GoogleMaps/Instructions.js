import React from 'react'

// maybe add restriction to map to limit panning later
const Instructions = (props) => {
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
                        return <li>{step}</li>;
                    })
                }</p>
            </div>
        )
    }
}

export default Instructions
