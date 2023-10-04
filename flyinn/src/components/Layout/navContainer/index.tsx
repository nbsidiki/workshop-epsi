import React from 'react'
import './styles.scss'
import Button from '../../Buttons/Button'
import { useMediaQuery } from 'react-responsive'

interface INavContainer {
  children: React.ReactNode
}

const NavContainer: React.FC<INavContainer> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <div className="navScreen h-full">
      <div className="navScreen-header flex-1 flex-row justify-between ">
        <div className="navScreen-logoContainer ml-3 mt-1">
          <img src="./logoGris.png" className=' h-20' />
        </div>
        <div className='navScreen-checkin flex flex-row justify-end mr-5'>
          <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Profil</Button>
          <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Trouver un logement</Button>
          <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Activités</Button>
          <Button className=' w-full hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2' type='button'>Deconnexion</Button>
        </div>
      </div>
      <div className="navScreen-body grid grid-cols-3 gap-7">
        {children}
      </div>
      <div className="navScreen-footer">
        <p className="size-small weight-light fc-brownish-grey-primary mr-30 mr-15Mobile">Groupe 5</p>
      </div>
    </div>
  )
}

export default NavContainer
