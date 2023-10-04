import React, { useState, useEffect } from 'react'
import { useField } from 'formik'

interface ICheckBox {
  name: string
  label: string
  checked?: boolean
  className?: string
}

const CheckBox: React.FC<ICheckBox> = ({ name, checked, label, className = '' }) => {
  const [field] = useField(name)
  const [value, setChecked] = useState(checked);

  return (
    <label style={{ cursor: 'pointer' }} className={className}>
      {//@ts-ignore 
        <input {...field} type="checkbox" checked={value} value={value} onChange={() => setChecked(!value)} />
      }
      <span className="pl-10">{label}</span>
    </label>
  )
}

export default CheckBox
