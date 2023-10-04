import React from 'react'
import './styles.scss'

interface IButtonProps {
  children: React.ReactChild
  buttonClass?: 'primary' | 'secondary' | 'outline'
  className?: string
  isLoading?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({
  onClick = () => {},
  children,
  buttonClass = 'primary',
  isLoading = false,
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const onButtonClick = () => {
    if (!disabled) {
      onClick()
    }
  }

  return (
    <button
      onClick={onButtonClick}
      type={type}
      className={`btn btnCarre btnCarre-${disabled ? 'secondary' : buttonClass} ${isLoading ? 'loading' : ''} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
