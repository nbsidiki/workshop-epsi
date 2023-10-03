import React from 'react'
import './styles.scss'

interface ILoginContainer {
  children: React.ReactNode
}

const LoginContainer: React.FC<ILoginContainer> = ({ children }) => {
  return (
    <div className="loginScreen">
      <div className="loginScreen-header">
        <div className="loginScreen-logoContainer">
          <img src="./logoGris.png" className='w-52 h-32' />
        </div>
      </div>
      <div className="loginScreen-body mb-0">{children} </div>
      <div className="loginScreen-footer">
        <p className="size-small weight-light fc-brownish-grey-primary mr-30 mr-15Mobile">Groupe 5</p>
      </div>
    </div>
  )
}

export default LoginContainer
