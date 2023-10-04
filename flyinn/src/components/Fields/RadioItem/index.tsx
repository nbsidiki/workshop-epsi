import React from 'react'
import { IRadioGroupChildrenProps } from '../RadioGroup'

interface IRadioItem extends IRadioGroupChildrenProps {
  label: string | React.ReactNode
  value: any
  className?: string
}

const RadioItem: React.FC<IRadioItem> = ({ label, value, fieldValue, name, setValue, className = '' }) => {
  const isChecked = value === fieldValue

  const onChange = () => setValue(value)

  const isLabelComponent = React.isValidElement(label)

  return (
    <label className={`containerBtnCarreRadio ${className}`}>
      {!isLabelComponent && <p className="lh-17 weight-light size-small mb-15  mb-15Mobile">{label}</p>}
      {isLabelComponent && (label as React.ReactChild)}
      <input type="radio" name={name} checked={isChecked} onChange={onChange} />
      <span className="btnCarre-radio"></span>
    </label>
  )
}

export default RadioItem
