import React from 'react'
import './styles.scss'
import Button from '../../Buttons/Button'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

interface ILoginContainer {
  children: React.ReactNode
}

const LoginContainer: React.FC<ILoginContainer> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <div className="loginScreen">
      <div className="loginScreen-header flex-1 flex-row justify-between ">
        <div className="loginScreen-logoContainer ml-3 mt-1">
          <img src="./logoGris.png" className=' h-20' />
        </div>
        <div className='loginScreen-checkin flex flex-row justify-end mr-5'>
          <Link to={'/signin'}>
            <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Inscription</Button>
          </Link>
          <Link to={'/login'}>
            <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Connexion</Button>
          </Link>
        </div>
      </div>
      <div className="loginScreen-body flex-wrap ">
        {!isTabletOrMobile ? <div className='loginPageImg ml-5 flex-1'>
          <img src="./images.jpeg" className=' h-96 w-full' />
        </div> : <></>}
        <div className='flex-1  mr-6'>
          {children}
        </div>
      </div>
      <div className="loginScreen-footer">
        <p className="size-small weight-light fc-brownish-grey-primary mr-30 mr-15Mobile">Groupe 5</p>
      </div>
    </div>
  )
}

export default LoginContainer
