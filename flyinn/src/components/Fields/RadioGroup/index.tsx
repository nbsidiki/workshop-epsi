import React, { Children } from 'react'
import { useField } from 'formik'

interface IRadioGroup {
  name: string
  children: (itemProps: IRadioGroupChildrenProps) => React.ReactChild
}

export interface IRadioGroupChildrenProps {
  name: string
  fieldValue: any
  setValue: (newValue: any) => void
}

const RadioGroup: React.FC<IRadioGroup> = ({ name, children }) => {
  let [field, meta, helper] = useField(name)

  const setValue = (newValue: any) => helper.setValue(newValue)

  return <>{children({ name, fieldValue: field.value, setValue })}</>
}

export default RadioGroup
