import React from 'react'
import Alert from '../../Alert'
import { useField, FieldInputProps, FieldMetaProps, FieldHelperProps } from 'formik'

export interface ICustomFieldInputProps extends FieldInputProps<any> {
  error?: boolean
}

export interface IFieldWrapper {
  name: string
  label?: string
  className?: string
  labelClassName?: string
  children?: (
    field: ICustomFieldInputProps,
    meta: FieldMetaProps<any>,
    helper: FieldHelperProps<any>
  ) => React.ReactNode
  required?: boolean
  direction?: 'column' | 'row'
  suffix?: string | React.ReactNode
  inputContainerWidth?: number | string
  showError?: boolean
}

const FieldWrapper: React.FC<IFieldWrapper> = ({
  name,
  direction = 'column',
  children,
  label,
  className = '',
  labelClassName = '',
  suffix,
  required,
  inputContainerWidth,
  showError = true
}) => {
  let [field, meta, helper] = useField(name)
  const inputId = `input-${name}`

  const hasError = Boolean(meta.touched && meta.error)
  const error = hasError ? meta.error : undefined

  return (
    <div

      className={`containerColumn${direction === 'row' ? ' directionRow' : ''} ${
        className ? className : ''
      } flex-alignStartMobile`}
    >
      {error && showError && <Alert text={error} className="mt-10 mt-10Mobile" />}
      <div className="w-100 flex-directionRow flex-alignCenter mt-10Mobile" style={{ width: inputContainerWidth }}>
        {children && children({ ...field, error: hasError }, meta, helper)}
        {typeof suffix === 'string' ? (
          <div className="p-5 p-5Mobile ml-10 ml-10Mobile size-medium">{suffix}</div>
        ) : (
          suffix
        )}
      </div>
      {label && (
        <label htmlFor={inputId} className={`label--input ${labelClassName}`}>
          {label}
          {required && <i className="fc-red-STATUS-primary"> *</i>}
        </label>
      )}
    </div>
  )
}

export default FieldWrapper
