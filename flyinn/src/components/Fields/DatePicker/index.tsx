import React from 'react'
import { registerLocale } from 'react-datepicker'
import fr from 'date-fns/locale/fr'
registerLocale('fr', fr)
import 'react-datepicker/dist/react-datepicker.css'
import FieldWrapper, { IFieldWrapper } from '@components/Layout/FieldWrapper'
import DatePickerInput from '@components/Inputs/DatePickerInput'
import './styles.scss'

interface IDatePicker extends IFieldWrapper {
  placeholder?: string
  minDate?: Date | string
  // Those values can be provided to show the user the interval he's selecting
  startDate?: string
  endDate?: string
  // Those values enable the component to determine if it's start selector or endSelector
  selectsStart?: true
  selectsEnd?: true
}

const DatePicker: React.FC<IDatePicker> = ({
  placeholder = '',
  minDate,
  startDate,
  endDate,
  selectsStart,
  selectsEnd,
  ...props
}) => {
  return (
    <FieldWrapper {...props}>
      {(field, meta, helper) => {
        return (
          <DatePickerInput
            {...field}
            onChange={helper.setValue}
            setTouched={helper.setTouched}
            placeholder={placeholder}
            minDate={minDate}
            startDate={startDate}
            endDate={endDate}
            selectsStart={selectsStart}
            selectsEnd={selectsEnd}
          />
        )
      }}
    </FieldWrapper>
  )
}

export default DatePicker
