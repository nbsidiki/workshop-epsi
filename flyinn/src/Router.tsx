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

                <Route path={routes.PROFILE} element={<NavContainer><Profile /></NavContainer>}>
                </Route>


            </Routes>

        </>
    )
})

export default Router

