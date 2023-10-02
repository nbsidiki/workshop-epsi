import { HomeIcon } from '@heroicons/react/24/solid';
import routes, {cerealSubRoutes} from '@routes';
import React from 'react';
import {Link, useHistory} from 'react-router-dom'

interface MobileNav {
  toggleSideBar: () => void
  isSidebarOpened : boolean
}

const MobileNavBar: React.FC<MobileNav> = ({ toggleSideBar, isSidebarOpened }) => {

  const history = useHistory();


  const navIcons = [
    {
      path: routes.MARCHE,
      icon: "icon-cours-matif",
      name: "Marchés"
    },
    {
      path: cerealSubRoutes.SELL_MY_CEREALS,
      name: "Vendre",
      icon: "icon-mes-cereales"
    },
    {
      path: cerealSubRoutes.DATAS,
      name: "Mes données",
      icon: "icon-actus"
    }
  ]

  return (
    <>
      <ul className="flex px-10">
        <li className="flex-1 flex text-black flex-1 justify-center items-center">
          <span>
            <Link to={routes.HOME} className={`mx-6 font-medium bg-black hover:text-primary ${history.location.pathname === routes.HOME ? `text-primary` : `text-black`}`}>
              <HomeIcon className="h-10 w-10" />
            </Link>
          </span>
        </li>

        {navIcons.map((navitem, index) => {
          return (
            <li key={index} className="text-black flex-1 flex text-black flex-1 justify-center items-center">
              <Link to={navitem.path} className={history.location.pathname === navitem.path ? `text-primary` : `text-black`}>
                <i className={`icon ${navitem.icon} text-5xl`}></i>
              </Link>
            </li>
          )
        })}

        <div className="text-black flex-1 flex text-black flex-1 justify-center items-center">
          <div onClick={toggleSideBar} className={`${isSidebarOpened ? 'active burgerContainer' :'burgerContainer'}`}>
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
            <span className="bar-4"></span>
          </div>
        </div>
      </ul>
    </>
  )
}

export default MobileNavBar;
