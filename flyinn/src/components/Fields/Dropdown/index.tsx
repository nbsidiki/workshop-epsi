import React, { useMemo } from 'react'
import ReactDropdown from 'react-dropdown'
import { useField } from 'formik'
import './styles.scss'

interface IDropdownOption {
  label: string
  value: string
}

interface IDropdown {
  options: IDropdownOption[]
  name: string
  placeholder: string
}

const Dropdown: React.FC<IDropdown> = ({ options, name, placeholder }) => {
  let [field, meta, helper] = useField(name)

  const onChange = ({ value }: { value: any }) => {
    helper.setValue(value)
  }

  return (
    <div className="containerDropdown">
      <ReactDropdown
        value={field.value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        arrowClosed={<label className="icon  icon-short-arrow-bottom "></label>}
        arrowOpen={<label className="icon  icon-short-arrow-bottom "></label>}
      />
    </div>
  )
}

export default Dropdown
