import React, { useState, useMemo, Fragment } from 'react'
import ReactSelect from 'react-select'
import { isMobile } from 'react-device-detect';
import AsyncSelect from "react-select/async";

export interface IOption {
  value: any
  label?: string
}

interface ISelectInput {
  value: any
  options?: IOption[]
  onChange: (value: any) => void
  icon?: string
  className?: string
  placeholder?: string
  error?: boolean
  isSearchable?: boolean
  findByValueFunction?: (option: IOption) => boolean
  menuPortalTarget?: HTMLElement | null
  async? : boolean
  asyncOptions? : () => void
}

const SelectInput: React.FC<ISelectInput> = ({
  value,
  icon,
  className = '',
  error,
  options,
  isSearchable,
  onChange,
  placeholder,
  findByValueFunction,
  menuPortalTarget,
  async,
  asyncOptions
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const selectClassName = `formsCarre${icon ? '--icon' : ''} ${error ? 'error' : ''} ${
    isFocused ? 'simulateFocus' : ''
    }`

  const formattedOptions = useMemo(
    () =>
      options?.map(option => ({
        value: option.value,
        label: option.label ? option.label : option.value
      })),
    [options]
  )

  // If we need to format the value after typing for certain types
  const valueItem = useMemo(() => {
    const result = options ? formattedOptions?.find(findByValueFunction ? findByValueFunction : option => option.value === value) : []
    return result ? result : ''
  }, [value])

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)

  }

  const handleChange = (newOption: any /* Because react-select typing sucks */) => {
    onChange(newOption.value)
  }


  return (
    <div className={`containerFormsCarreInput ${className}`}>
      <div className={`${selectClassName}`} style={{ padding: 5 }}>

        <Fragment>
          {async ?
              <AsyncSelect
                  placeholder={placeholder}
                  onChange={handleChange}
                  loadOptions={asyncOptions}
              />
              :
                <ReactSelect
                    options={formattedOptions}
                    value={valueItem as { value: any; label: string }}
                    menuPortalTarget={menuPortalTarget}
                    maxMenuHeight={isMobile ? 175 : 500}
                    onChange={handleChange}
                    isSearchable={isSearchable}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    styles={{
                      control: base => ({ ...base, border: 'none', boxShadow: 'none' }),
                      singleValue: base => ({ ...base, fontFamily: 'Arial', font: '400 14px Arial' }),
                      placeholder: base => ({ ...base, fontFamily: 'Arial', font: '400 14px Arial', whiteSpace: 'nowrap' })
                    }}
                />

          }

        </Fragment>


      </div>
      {icon && <label className={`icon icon-${icon}`}></label>}
    </div>
  )
}

export default SelectInput
