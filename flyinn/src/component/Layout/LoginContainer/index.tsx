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
          <img src="/img/Logos/01-img-01-logo-default.png" />
        </div>
      </div>
      <div className="loginScreen-body">{children}</div>
      <div className="loginScreen-footer">
        <p className="size-small weight-light fc-brownish-grey-primary mr-30 mr-15Mobile">Certifications</p>
        <img className="mr-30 mr-15Mobile" src="/img/Logos/gcar-logo-1.jpg" />
        <img className="mr-30 mr-15Mobile" src="/img/Logos/gcar-logo-2.jpg" />
        <img src="/img/Logos/gcar-logo-3.jpg" />
      </div>
    </div>
  )
}

export default LoginContainer
