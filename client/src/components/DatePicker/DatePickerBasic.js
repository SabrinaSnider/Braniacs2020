import React from 'react'
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import { Form } from 'react-bootstrap'
import 'react-nice-dates/build/style.css'
import './DatePickerBasic.css'

const DatePickerBasic = (props) => {
  const handleChange = (e) =>{
    props.setDate(e.target.value);
  }
  return (
    <DatePicker date={props.date} onDateChange={handleChange} locale={enGB}>
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