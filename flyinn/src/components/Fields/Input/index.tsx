import React, { Fragment } from 'react'
import FieldWrapper, { IFieldWrapper } from '@components/Layout/FieldWrapper'
import TextInput from '@components/Inputs/TextInput'
import PasswordInput from '@components/Inputs/PasswordInput'

import './styles.scss'

interface IInputProps extends IFieldWrapper {
  placeholder?: string
  type?: string
  icon?: string
  min?: string
  max?: string
  inputClassName?: string
}

const Input: React.FC<IInputProps> = ({ icon, type, placeholder, min, max, inputClassName, ...props }) => {
  return (
    <FieldWrapper {...props}>
      {(field, meta, helper) => {
        const setValue = helper.setValue
        const setTouched = helper.setTouched

        return (
          <Fragment>
            {type === 'password' ?
              <PasswordInput
                {...field}
                setTouched={setTouched}
                className={inputClassName}
                placeholder={placeholder}
                type={type}
                icon={icon}
                setValue={setValue}
                min={min}
                max={max}
              />
              :
              <TextInput
                {...field}
                setTouched={setTouched}
                className={inputClassName}
                placeholder={placeholder}
                type={type}
                icon={icon}
                setValue={setValue}
                min={min}
                max={max}
              />
            }
          </Fragment>
        )
      }}
    </FieldWrapper>
  )
}

export default Input
