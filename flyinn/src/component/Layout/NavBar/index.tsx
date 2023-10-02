import React, { useRef, useState, useEffect } from 'react'
import { useStore } from '@stores/index'
import { IAccountModel } from '@stores/accounts/store'
import LinkButton from '@components/Buttons/LinkButton'
import { getInitials } from '@utils/string'
import { useHistory, Link } from 'react-router-dom'
import useDropdown from '@hooks/useDropdown'
import { observer } from 'mobx-react-lite'
import routes, { cerealSubRoutes } from '@routes'
import './styles.scss'
import { HomeIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useMediaQuery } from 'react-responsive'

interface INavBar {
  isSidebarOpened: boolean
  toggleSideBar: () => void
  searchBarComponent?: React.ReactNode
}

const NavBar: React.FC<INavBar> = observer(({ isSidebarOpened, toggleSideBar, searchBarComponent }) => {
  const { accounts: accountsStore, login: loginStore, cart: cartStore } = useStore()
  const history = useHistory();

  const [subMenuIndex, setIndexSubMenuVisible] = useState<number | null>(null);

  const dropDown = useRef<HTMLDivElement>(null)

  const { active: userMenuActive, toggle: toggleUserMenu } = useDropdown(dropDown)

  const selectedAccount = accountsStore.selectedAccount as IAccountModel
  const otherAccounts = accountsStore.unSelectedAccounts
  const onLogoutClick = () => loginStore.logout();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const menuItems = [
    {
      path: routes.CEREALS,
      name: "Mes céréales",
      subMenuItems: [
        {
          path: routes.MARCHE,
          name: "Marchés",
        },
        {
          path: cerealSubRoutes.SELL_MY_CEREALS,
          name: "Vendre mes céréales",
        },
        {
          path: cerealSubRoutes.DATAS,
          name: "Mes données",
        },
      ]
    },
    {
      path: routes.ACCOUNTING,
      name: "Comptabilités"
    },
    {
      path: routes.SALES_LINES,
      name: "Commandes"
    },
    {
      path: routes.CLICK_AND_COLLECT,
      name: "Click & Collect"
    },

  ]

  const onActiveSubmenu = (index: number) => {
    if (index === subMenuIndex) {
      setIndexSubMenuVisible(null)
    } else {
      setIndexSubMenuVisible(index)
    }
  }

  const isActiveMenuPage = (menuIndex) => {
    return menuItems[menuIndex].subMenuItems && menuItems[menuIndex].subMenuItems.find(page => page.path === history.location.pathname);
  }

  useEffect(() => {
    setIndexSubMenuVisible(null)
  }, [history.location.pathname])

  return (
    <div className="headerNav">
      <div className="headerNav-logoContainer">
        <Link to={routes.NEWS} className="logo">
          <img src="/img/Logos/01-img-01-logo-default.png" />
        </Link>
        {searchBarComponent && searchBarComponent}

        {!isTabletOrMobile &&
          <div>
            <ul className='flex justify-center items-center'>
              <li className="mr-10">
                <Link to={routes.HOME} className="mx-6 font-medium hover:text-primary">
                  <HomeIcon className="h-10 w-10" />
                </Link>
              </li>
              {menuItems.map((item, index) => {
                return (
                  <li className="mr-3">
                    <>
                      {item.subMenuItems ?
                        <>

                          <div className="relative">
                            <span className={` items-center font-medium flex ${index == subMenuIndex || isActiveMenuPage(index) ? `text-primary` : ``}`} onClick={() => onActiveSubmenu(index)}>
                              {item.name}
                              <ChevronDownIcon className="w-8 h-8" />
                            </span>
                            {index == subMenuIndex && menuItems[subMenuIndex].subMenuItems &&
                              <div className='submenu'>
                                <ul>
                                  {item.subMenuItems.map((subItem) => {
                                    return (
                                      <li>
                                        <Link onClick={() => setIndexSubMenuVisible(null)} to={subItem.path}
                                              className={`block font-light hover:text-primary ${history.location.pathname === subItem.path ? `text-primary`: ``}`}>
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            }
                          </div>
                        </>
                        :

                        <Link to={item.path} className={`mx-6 font-medium hover:text-primary ${history.location.pathname === item.path ? `text-primary`: ``}`}>
                          {item.name}
                        </Link>
                      }
                    </>
                  </li>
                )
              })}
            </ul>
          </div>
        }
      </div>
      <div className="headerNav-userNav">
        <div
          onClick={toggleUserMenu}
          className={`headerNav-userMenu ${userMenuActive ? '' : 'collapsed'}`}
          ref={dropDown}
        >
          {selectedAccount && (
            <>
              <span className="portrait size-medium weight-light fc-white red">
                {getInitials(selectedAccount.firstName, selectedAccount.lastName)}
              </span>
              <span className="userDropdown userAccount hidden-sm hidden-xs">
                <p className="weight-medium size-medium">
                  {selectedAccount.firstName} {selectedAccount.lastName}
                </p>
                {selectedAccount.contact.name && (
                  <p className="weight-light size-medium">{selectedAccount.contact.name}</p>
                )}
              </span>
            </>
          )}

          <div className="headerNav-userMenuDropdown">
            <ul className="headerNav-userMenuDropdown-actions">
              <li className="headerNav-userMenuDropdown-action" onClick={() => history.push('/profile')}>
                <i className="icon-short-identifiant size-medium mr-10 mr-10Mobile"></i>
                <p className="size-medium weight-light">Mon profil</p>
              </li>
              <li className="headerNav-userMenuDropdown-action" onClick={() => history.push('/annual-update')}>
                <i className="icon-short-maj size-medium mr-10 mr-10Mobile"></i>
                <p className="size-medium weight-light">Mises à jour</p>
              </li>
              <li className="headerNav-userMenuDropdown-action" onClick={() => history.push('/durability')}>
                <i className="icon-short-durabilite size-medium mr-10 mr-10Mobile"></i>
                <p className="size-medium weight-light">Durabilité</p>
              </li>
            </ul>
            <ul className="headerNav-userMenuDropdown-accounts">
              {otherAccounts.map((otherAccount, index) => (
                <li className="headerNav-userMenu" key={index}>
                  <span className="portrait size-medium weight-light fc-white green">
                    {getInitials(otherAccount.firstName, otherAccount.lastName)}
                  </span>
                  <span className="userAccount">
                    <p className="weight-medium size-medium">
                      {otherAccount.firstName} {otherAccount.lastName}
                    </p>
                    {otherAccount.contact.certifOwnerContactNum != undefined && (
                      <p className="weight-light size-medium">{otherAccount.contact.certifOwnerContactNum}</p>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <LinkButton
              text="Déconnexion"
              className="headerNav-userMenuDropdown-logOut"
              onClick={onLogoutClick}
              isAnimated
            />
          </div>
        </div>
      </div>
    </div>
  )
})

export default NavBar
