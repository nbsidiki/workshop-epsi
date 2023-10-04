import React from 'react'
import './styles.scss'
import Button from '../../Buttons/Button'
import { useMediaQuery } from 'react-responsive'

interface ILandingPageContainer {
  children: React.ReactNode
}

const LandingPageContainer: React.FC<ILandingPageContainer> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <div className="landingPageScreen">
      <div className="landingPageScreen-header flex-1 flex-row justify-between ">
        <div className="landingPageScreen-logoContainer ml-3 mt-1">
          <img src="./logoGris.png" className=' h-20' />
        </div>
        <div className='landingPageScreen-checkin flex flex-row justify-end mr-5'>
          <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Inscription</Button>
          <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Connexion</Button>
        </div>
      </div>
      <div className="landingPageScreen-body flex-wrap ">
        {!isTabletOrMobile ? <div className='landingPagePageImg ml-5 flex-1'>
          <img src="./flyinn.png" className=' h-96 w-full' />
        </div> : <></>}
        <div className='flex-1  mr-6'>
        {children}
        </div>
        </div>
      <div className="landingPageScreen-footer">
        <p className="size-small weight-light fc-brownish-grey-primary mr-30 mr-15Mobile">Groupe 5</p>
      </div>
    </div>
  )
}

export default LandingPageContainer
