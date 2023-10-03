import React from 'react'
import './styles.scss'

interface ILinkButton {
  text: string
  icon?: string
  className?: string
  isAnimated?: boolean
  onClick?: () => void
}

const LinkButton: React.FC<ILinkButton> = ({
  text,
  icon = 'short-arrow-next',
  className = '',
  isAnimated = false,
  onClick = () => undefined
}) => {
  const finalClassName = `linkButton ${className} ${isAnimated ? 'animated' : ''}`

  return (
    <div className={finalClassName} onClick={onClick}>
      <i className={`fc-deep-orange-primary icon-${icon} mr-10 mr-10Mobile`}></i>
      <p className="size-medium weight-medium fc-secondary-primary">{text}</p>
    </div>
  )
}

export default LinkButton
