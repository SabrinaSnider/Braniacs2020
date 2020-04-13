import React, { useState } from 'react';
import { Popover } from 'react-bootstrap'

const CalendarPopup = (props) => {
    return (
        <Popover id="popover-basic" placement="bottom">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </Popover.Content>
        </Popover>
    )
};

export default CalendarPopup;