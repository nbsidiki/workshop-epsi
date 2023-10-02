import React, { Fragment, useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles.scss'
import routes from '@routes'
import useTimeout from '@hooks/useTimeout'
import { IBlogPage } from '@services/blog'

interface Sidebar {
  isSidebarOpened: boolean
  toggleSideBar: () => void
  blogPages?: IBlogPage[]
}

const Sidebar: React.FC<Sidebar> = ({ isSidebarOpened, toggleSideBar, blogPages }) => {
  interface INavigationItem {
    path?: string
    url?: string
    name: string
    icon: string
    children?: {
      path: string
      name: string
    }[]
  }

  const [openedNavigationItemIndex, setOpenedNavigationItemIndex] = useState<number>()

  const navigationItems: INavigationItem[] = useMemo(() => {

    setOpenedNavigationItemIndex(undefined)

    return [
      {
        path: routes.ACCOUNTING,
        name: 'Comptabilité',
        children: [
          {
            path: routes.ACCOUNTING,
            name: 'Client',
          },
          {
            path: routes.ACCOUNTING,
            name: 'Fournisseur',
          },
          {
            path: routes.ACCOUNTING,
            name: 'Synthèse',
          }
        ]
      },
      {
        path: routes.SALES_LINES,
        name: 'Mes Commandes',
      },
      {
        path: routes.CLICK_AND_COLLECT,
        name: 'Click & Collect',
      },
    ]
  }, [])

  const location = useLocation()

  const matchPath = (path: string | string[]) => {
    const match = (path: string) => (path !== '/' ? location.pathname.indexOf(path) !== -1 : path === location.pathname)

    if (Array.isArray(path)) {
      return path.findIndex(pathItem => match(pathItem)) !== -1
    } else {
      return match(path)
    }
  }

  // We set a timeout in order to wait half a second before displaying navigation item's title when the
  // sidebar opening animation starts
  const { init: initAnimationTimeout, done: animationTimeoutDone } = useTimeout({ duration: 500, startOnRender: false })

  useEffect(() => {
    if (isSidebarOpened) {
      initAnimationTimeout()
    }
  }, [isSidebarOpened])

  return (
    <Fragment>
      <div className={`sidebarNav ${isSidebarOpened ? '' : 'collapsed'}`} style={{ overflowY: 'auto' }}>

        <div className="headerNav-burgerMenu opened" >
          <div className="burgerContainer" onClick={toggleSideBar}>
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
            <span className="bar-4"></span>
          </div>
          <span className="headerNav-burgerMenuText fc-primary-primary weight-medium size-medium">Menu</span>
          <div className="menu-txt">Menu</div>
        </div>

        <div className="sidebarNav-itemsList">


          <div className='pt-10 w-full'>
            {navigationItems.map((navigationItem, index) => {
              const isLinkActive = navigationItem.path ? matchPath(navigationItem.path) : false

              if (navigationItem.children) {
                const onToggle = () => {
                  setOpenedNavigationItemIndex(
                    openedNavigationItemIndex !== undefined && isSidebarOpened ? undefined : index
                  )

                  if (!isSidebarOpened) {
                    toggleSideBar()
                  }
                }

                return (
                  <Fragment key={`itemWithChildren-${index}`}>
                    <span
                      className="sidebarNav-itemsList-item"
                      style={{ cursor: 'pointer' }}
                      key={index}
                      onClick={() => onToggle()}
                    >
                      <i className={`icon icon-${navigationItem.icon}`}></i>
                      {isSidebarOpened && animationTimeoutDone && (
                        <span className={`${isSidebarOpened ? '' : ''}`}>{navigationItem.name}</span>
                      )}
                    </span>
                    {openedNavigationItemIndex === index && isSidebarOpened && (
                      <div style={{ marginTop: 5, width: '100%' }}>
                        {navigationItem.children.map((item, index2) => {
                          const isLinkActive = item.path ? matchPath(item.path) : false

                          return (
                            <Link
                              onClick={() => {
                                if (isSidebarOpened) {
                                  toggleSideBar()
                                }
                              }}
                              className={`sidebarNav-itemsList-item ${isLinkActive ? 'active' : ''}`}
                              style={{ paddingLeft: 75, cursor: 'pointer' }}
                              to={item.path}
                              key={`${navigationItem.name}-child-${index2}`}
                            >
                              <div style={{ fontSize: 12 }}>{item.name}</div>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </Fragment>
                )
              } else {
                return navigationItem.path ? (
                  <Link
                    onClick={() => {
                      if (isSidebarOpened) {
                        toggleSideBar()
                      }
                    }}
                    className={`sidebarNav-itemsList-item ${isLinkActive ? 'active' : ''}`}
                    to={Array.isArray(navigationItem.path) ? navigationItem.path[1] : navigationItem.path}
                    key={index}
                  >
                    {' '}
                    <i className={`icon icon-${navigationItem.icon}`}></i>
                    {isSidebarOpened && animationTimeoutDone && (
                      <span className={`${isSidebarOpened ? '' : ''}`}>{navigationItem.name}</span>
                    )}
                  </Link>
                ) : (
                  <a href={navigationItem.url} className={`sidebarNav-itemsList-item`} target="_blank" key={index}>
                    <i className={`icon icon-${navigationItem.icon}`}></i>
                    {isSidebarOpened && animationTimeoutDone && (
                      <span className={`${isSidebarOpened ? '' : ''}`}>{navigationItem.name}</span>
                    )}
                  </a>
                )
              }
            })}

          </div>



        </div>
      </div>
    </Fragment>
  )
}

export default Sidebar
