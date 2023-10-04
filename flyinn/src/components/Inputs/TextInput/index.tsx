import React, { useMemo } from 'react'
import { formatPhoneNumber } from '@utils/string'

interface ITextInput extends React.HTMLProps<HTMLInputElement> {
  icon?: string
  error?: boolean
  setValue: (newValue: any) => void
  setTouched?: (touched: boolean) => void
}

// List of types which needs to be formatted
const typesToFormat = ['tel']

const TextInput: React.FC<ITextInput> = ({ error, icon, setValue, setTouched, ...inputProps }) => {
  const { type } = inputProps

  const inputClassName = `formsCarre${icon ? '--icon' : ''}${type === 'number' ? '-numbers' : ''}${error ? ' error' : ''
    } ${inputProps.className ? inputProps.className : ''}`

  const isTypeToFormat = typesToFormat.includes(type ? type : 'text')

  // If we need to format the value after typing for certain types
  const formattedValue = useMemo(() => {
    if (inputProps.type === 'tel') {
      return inputProps.value ? formatPhoneNumber(inputProps.value as string) : ''
    } else {
      return inputProps.value
    }
  }, [inputProps.value])

  const value = isTypeToFormat ? formattedValue : inputProps.value

  const onPlusClick = () => {
    if (setTouched) {
      setTouched(true)
    }
    setValue((inputProps.value as number) + 1)
  }

  const onMinusClick = () => {
    if (setTouched) {
      setTouched(true)
    }
    setValue((inputProps.value as number) - 1)
  }

  return (
    <div className="containerFormsCarreInput">
      <input {...inputProps} value={value} type={type} className={inputClassName} />
      {type === 'number' && (
        <ul className="formsCarre-numbersArrows">
          <li className="formsCarre-numbersUp icon-short-arrow-top" onClick={onPlusClick}></li>
          <li className="formsCarre-numbersDown icon-short-arrow-bottom" onClick={onMinusClick}></li>
        </ul>
      )}
      {icon && <label htmlFor={inputProps.id} className={`icon icon-${icon}`}></label>}
    </div>
  )
}

export default TextInput
