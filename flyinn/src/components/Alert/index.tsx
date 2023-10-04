import React from 'react'
import './styles.scss'

interface IAlert {
  text: string
  icon?: string
  className?: string
  type?: 'error' | 'ok'
}

const Alert: React.FC<IAlert> = ({ type = 'error', text, className = '', icon = null }) => {
  return (
    <div className={`alert ${type} ${className}`}>
      {icon && <i className={`icon-${icon} mr-10`} />}
      <p className="size-tiny weight-light">{text}</p>
    </div>
  )
}

export default Alert
