import React, { useState, useMemo } from 'react'
import ReactDatePicker from 'react-datepicker'
import { format, parse } from 'date-fns'

interface IDatePickerInput {
  value: string
  onChange: (value: string | null) => void
  placeholder?: string
  minDate?: Date | string
  // Those values can be provided to show the user the interval he's selecting
  startDate?: string
  endDate?: string
  // Those values enable the component to determine if it's start selector or endSelector
  selectsStart?: true
  selectsEnd?: true
  setTouched?: (touched: boolean) => void
  id?: string
  error?: boolean
}

const DatePickerInput: React.FC<IDatePickerInput> = ({
  setTouched,
  minDate,
  startDate,
  endDate,
  value: inputValue,
  onChange: onValueChange,
  placeholder,
  id,
  selectsEnd,
  selectsStart,
  error
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const onChange = (value: Date) => {
    setIsFocused(false)
    if (setTouched) {
      setTouched(true)
    }
    onValueChange(value ? format(value, 'yyyy-MM-dd') : '')
  }

  const onBlur = () => {
    setIsFocused(false)
    if (setTouched) {
      setTouched(true)
    }
  }

  const formatStringDate = (stringDate: string | undefined) => {
    return stringDate ? new Date(stringDate) : undefined
  }

  const finalStartDate = useMemo(() => formatStringDate(startDate), [startDate])
  const finalEndDate = useMemo(() => formatStringDate(endDate), [endDate])

  const finalMinDate = useMemo(() => {
    if (typeof minDate === 'string') {
      return formatStringDate(minDate)
    } else {
      return minDate
    }
  }, [minDate])

  const onFocus = () => {
    setIsFocused(true)
  }

  const value = useMemo(() => {
    return inputValue ? parse(inputValue, 'yyyy-MM-dd', new Date()) : null
  }, [inputValue])

  const inputClassName = `formsCarre--icon ${error ? 'error' : ''}`

  return (
    <div className="containerFormsCarreInput">
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        selected={value}
        onChange={onChange}
        id={id}
        className={inputClassName}
        locale="fr"
        placeholderText={placeholder}
        onBlur={onBlur}
        minDate={finalMinDate}
        startDate={finalStartDate}
        endDate={finalEndDate}
        selectsStart={selectsStart}
        selectsEnd={selectsEnd}
        onFocus={onFocus}
        isClearable
      />
      <label
        htmlFor={id}
        className={`icon icon-short-agenda ${error ? 'error' : ''} ${isFocused ? 'inputFocused' : ''}`}
      ></label>
    </div>
  )
}

export default DatePickerInput
