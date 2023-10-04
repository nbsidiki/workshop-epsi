import React, { Fragment, useMemo, useState } from 'react'
import { formatPhoneNumber } from '@utils/string'

interface ITextInput extends React.HTMLProps<HTMLInputElement> {
    icon?: string
    error?: boolean
    setValue: (newValue: any) => void
    setTouched?: (touched: boolean) => void
}

const PasswordInput: React.FC<ITextInput> = ({ error, icon, setValue, setTouched, ...inputProps }) => {
    const { type } = inputProps

    const [fieldType, setFieldType] = useState("password")
    const [showPasswordClass, setShowPasswordClass] = useState("")


    const inputClassName = `formsCarre${icon ? '--icon' : ''}${type === 'number' ? '-numbers' : ''}${error ? ' error' : ''
        } ${inputProps.className ? inputProps.className : ''}`

    const value = inputProps.value

    const showPassword = () => {

        if (fieldType === "password") {
            setFieldType("text"),
                setShowPasswordClass("disabled")
        } else {
            setFieldType("password"),
                setShowPasswordClass("")
        }
    }

    return (
        <div className="containerFormsCarreInput">

            <input {...inputProps} value={value} type={fieldType} className={inputClassName} />

            {icon && <label htmlFor={inputProps.id} className={`icon icon-${icon}`}></label>}

            <span className={`lnr lnr-eye showPassword ${showPasswordClass}`} onClick={() => showPassword()} />

        </div>
    )
}

export default PasswordInput
