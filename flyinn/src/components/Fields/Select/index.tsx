import React, {Fragment} from 'react'
import FieldWrapper, { IFieldWrapper } from '../../Layout/FieldWrapper'
import SelectInput, { IOption } from '../../Inputs/SelectInput'
import AsyncSelect from "react-select/async";
import FilterContainer from "../../Layout/FilterContainer";

interface ISelectProps extends IFieldWrapper {
  options?: IOption[]
  icon?: string
  isSearchable?: boolean
  selectClassName?: string
  placeholder?: string
  findByValueFunction?: (option: IOption) => boolean
  menuPortalTarget?: HTMLElement | null
  async?: boolean
  loadOptions? : () => void
}

const Select: React.FC<ISelectProps> = ({
  options,
  icon,
  isSearchable,
  selectClassName = '',
  placeholder,
  findByValueFunction,
  menuPortalTarget,
  loadOptions,
  async,
  ...props
}) => {

  return (
    <FieldWrapper {...props}>
      {(field, meta, helper) => {
        const onChange = (newValue: any) => {
          helper.setValue(newValue)

        }
        return (

            <SelectInput
                {...field}
                asyncOptions={loadOptions}
                async={async}
                placeholder={placeholder}
                className={selectClassName}
                options={options}
                onChange={onChange}
                findByValueFunction={findByValueFunction}
                menuPortalTarget={menuPortalTarget}
            />
        )
      }}
    </FieldWrapper>
  )
}

export default Select
