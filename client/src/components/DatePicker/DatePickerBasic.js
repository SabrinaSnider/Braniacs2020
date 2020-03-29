import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import { Form } from 'react-bootstrap'
import 'react-nice-dates/build/style.css'

const DatePickerBasic = (props) => {
  return (
    <DatePicker date={props.date} onDateChange={props.setDate} locale={enGB}>
      {({ inputProps, focused }) => (
        <Form.Control
          className={'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
      )}
    </DatePicker>
  )
}

export default DatePickerBasic;