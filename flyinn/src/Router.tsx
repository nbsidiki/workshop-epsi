import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
//import NavContainer from './components/Layout/NavContainer'
import { observer } from 'mobx-react-lite'
import routes from './routes'
import Login from './components/loginForm/login'
import LoginContainer from './components/Layout/LoginContainer'
import LandingPageContainer from './components/Layout/LandingPageContainer'
import Home from './components/LandingPage/home'
import SigninContainer from './components/Layout/signinContainer'
import Signin from './components/signin/signin'
import NavContainer from './components/Layout/navContainer'
import Profile from './components/profile/profile'
import News from './components/Layout/News'
import Activity from './components/Activity/activity'
import AdLogementForm from './components/applicationForm'
import DemarcheForm from './components/DemarcheForm'
import ActivityForm from './components/ActivityForm'
import FindHomeContainer from './components/findHome'
import ArticleDetail from './components/News/ArticleDetail'
import ArticleList from './components/News/ArticleList'

const Router: React.FC = observer(() => {

    useEffect(() => {

    }, [])

    return (
        <>
            <Routes>
                <Route path={routes.LOGIN} element={<LoginContainer> <Login /></LoginContainer>}>
                </Route>

                <Route path={routes.HOME} element={<LandingPageContainer> <Home /></LandingPageContainer>}>
                </Route>

                <Route path={routes.SIGNIN} element={<SigninContainer> <Signin /></SigninContainer>}>
                </Route>

                <Route path={routes.PROFILE} element={<NavContainer className='pl-6 pr-6 vsm:grid-cols-1 grid lg:grid-cols-3 gap-7'><Profile /></NavContainer>}>
                </Route>


                <Route path={routes.ACTIVITY} element={<NavContainer className='pl-6 pr-6 vsm:grid-cols-1 grid gap-7 sm:grid-cols-3 overflow-auto'><Activity /></NavContainer>}>
                </Route>
                <Route path={routes.ADLOGEMENT} element={<NavContainer className='pl-6 pr-6 vsm:grid-cols-1 grid gap-7'><AdLogementForm /></NavContainer>}>
                </Route>
                <Route path={routes.APPLYLOGEMENT} element={<NavContainer className='pl-6 pr-6 vsm:grid-cols-1 grid gap-7'><DemarcheForm /></NavContainer>}>
                </Route>
                <Route path={routes.APPLYACTIVITY} element={<NavContainer className='pl-6 pr-6 vsm:grid-cols-1 grid gap-7'><ActivityForm /></NavContainer>}>
                </Route>
                <Route path={`${routes.FINDHOME}/:articleId`} element={<FindHomeContainer>
                    <ArticleDetail />
                </FindHomeContainer>}>
                </Route>
                <Route path={`${routes.FINDHOME}`} element={<FindHomeContainer>
                    <ArticleList />
                </FindHomeContainer>}>

                </Route>
            </Routes>

        </>
    )
})

export default Router

