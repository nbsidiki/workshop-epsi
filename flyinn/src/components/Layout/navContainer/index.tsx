import React from 'react'
import './styles.scss'
import Button from '../../Buttons/Button'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import useService from '@hooks/useServices'
import { logout } from '@services/login'
import { Toast } from 'react-toastify/dist/components'
import { toast } from 'react-toastify'

interface INavContainer {
  children: React.ReactNode
}

const NavContainer: React.FC<INavContainer> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  const onLogout = () => {
    try {
      logout()
      toast.success('Success')
    } catch (error: any) {
      Toast(error.message)
    }
  }
  return (
    <div className="navScreen h-full">
      <div className="navScreen-header flex-1 flex-row justify-between ">
        <div className="navScreen-logoContainer ml-3 mt-1">
          <img src="./logoGris.png" className=' h-20' />
        </div>
        <div className='navScreen-checkin flex flex-row justify-end mr-5 overflow-scroll'>
          <Link to={'/profile'}>
            <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Profil</Button>
          </Link>
          <Link to={'/findhome'}>
            <Button className=' w-full p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Trouver un logement</Button>
          </Link>
          <Link to={'/activity'}>
            <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Activités</Button>
          </Link>
          <Link to={'/demarches'}>
            <Button className=' p-5 text-white hover:border-b-2 hover:border-gray-300' type='button'>Mes demarches</Button>
          </Link>
          <Link to={'/'}>
            <Button onClick={onLogout} className='h-12 w-full hover:bg-orange-400 bg-orange-500 text-white rounded-3xl  px-4 py-2 mt-3' type='button'>Deconnexion</Button>
          </Link>
        </div>
      </div>
      <div className="navScreen-body pl-6 pr-6 vsm:grid-cols-1 grid lg:grid-cols-3 gap-7">
        {children}
      </div>
      <div className="navScreen-footer">
        <p className="size-small weight-light fc-brownish-grey-primary mr-30 mr-15Mobile">Groupe 5</p>
      </div>
    </div>
  )
}

export default NavContainer
