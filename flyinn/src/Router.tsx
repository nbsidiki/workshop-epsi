import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
//import NavContainer from './components/Layout/NavContainer'
import { observer } from 'mobx-react-lite'
import routes from './routes'
import Login from './components/loginForm/login'
import LoginContainer from './components/Layout/LoginContainer'

const Router: React.FC = observer(() => {

    useEffect(() => {

    }, [])

    return (
        <>
            <Routes>
                <Route path={routes.LOGIN} element={<LoginContainer> <Login /></LoginContainer>}>
                </Route>
            </Routes>

        </>
    )
})

export default Router

