import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import AuthWrapper from '../AuthWrapper';
import useService from '@hooks/useService';
import { fetchMenuPages, IBlogPage } from '@services/blog';
import MobileNavBar from '../MobileNavbar';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../Sidebar';

interface NavContainer {
  children: React.ReactChild
  searchBarComponent?: React.ReactNode
}

const NavContainer: React.FC<NavContainer> = ({ children, searchBarComponent }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false)

  const toggleSideBar = () => setIsSidebarOpened(!isSidebarOpened)

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const { service: blogPagesService } = useService<IBlogPage[]>()

  const onFetchBlogPages = () => {
    blogPagesService(fetchMenuPages)
  }

  useEffect(() => {
    onFetchBlogPages()
  }, [])

  return (
    <AuthWrapper>
      <div className="mainContainer">
        <NavBar
          toggleSideBar={toggleSideBar}
          isSidebarOpened={isSidebarOpened}
          searchBarComponent={searchBarComponent}
        />
        <div className="viewContainer">
          <>{children}</>
        </div>

        {isTabletOrMobile &&
          <>
            <div className="w-full z-10 bg-white border-t border-grey-light h-24">
              <MobileNavBar toggleSideBar={toggleSideBar}  isSidebarOpened={isSidebarOpened}/>
            </div>

            <Sidebar isSidebarOpened={isSidebarOpened} toggleSideBar={toggleSideBar} />
          </>
        }
      </div>
    </AuthWrapper>
  )
}

export default NavContainer
