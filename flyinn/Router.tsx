import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom'
import NotFound from './components/NotFound'
import '../src/assets/utils.scss'
import Login from './containers/Login'
import NavContainer from '@components/Layout/NavContainer'
import { observer } from 'mobx-react-lite'
import routes, { loginRoutes } from '@routes'

const Router: React.FC = observer(() => {
    const { hydrated } = useStore()

    useEffect(() => {

    }, [])

    return (
        <>
            {hydrated && (
                <Switch>
                    {/* Login */}
                    <Route exact path={routes.LOGIN}>
                        <Login />
                    </Route>

                    <NavContainer>
                        <>
                        </>
                    </NavContainer>

                    {/* 404 Not Found */}
                    <Route component={NotFound} />
                </Switch>
            )}
        </>
    )
})

export default Router
function useStore(): { hydrated: any } {
    throw new Error('Function not implemented.')
}

