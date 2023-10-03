import React, { useMemo } from 'react'
// @ts-ignore because rodal does not have a declaration file
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import './styles.scss'
import Button from '@components/Buttons/Button'

interface IModal {
  active: boolean
  toggle: () => void
  children: React.ReactNode
  footer?: React.ReactNode
  bodyClassName?: string
  onClose?: () => void
  buttonText?: string
  width?: number
}

const Modal: React.FC<IModal> = ({
  active,
  toggle,
  footer,
  children,
  bodyClassName = '',
  onClose,
  buttonText = '',
  width
}) => {
  const handleClose = () => {
    toggle()

    if (onClose) {
      onClose()
    }
  }

  const customStyles = useMemo(
    () => ({
      height: 'auto',
      zIndex: 10000,
      width,
      minWidth: width ? width : 'auto'
    }),
    []
  )

  return (
    <Rodal className="modal" visible={active} onClose={handleClose} showCloseButton={false} customStyles={customStyles}>
      <div className="modal-header">
        <i className="modalClose icon-short-close size-veryLarge" onClick={handleClose}></i>
      </div>
      <div className={`modal-body mb-25Mobile ${bodyClassName}`}>{children}</div>
      <div className="modal-footer p-10">
        {footer ? (footer) : buttonText ? (
          <Button className="pl-60 pr-60" onClick={handleClose}>
            {buttonText}
          </Button>
        ) : ''}
      </div>
    </Rodal>
  )
}

export default Modal
