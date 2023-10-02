import React from 'react'
import Router from './Router'
import { StoreProvider } from './stores'
import '../src/assets/utils.scss'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import './assets/fonts/icomoon/style.css'
/* import './components/EShop/Cart/CartHeader/styles.scss'
import './components/EShop/Cart/CartDetail/styles.scss'
import './components/EShop/EShopHeader/styles.scss'
import './components/EShop/ProductFamilyGrid/styles.scss'
import './components/EShop/ProductDetails/styles.scss' */
import '../node_modules/react-toastify/dist/ReactToastify.css'
import 'react-tabs/style/react-tabs.css'
import './assets/css/lnr-icons.css'
import PwaInstall from '@components/PwaInstall'
import ReactGA from "react-ga4";

if (process.env.CODE_GA) {
  ReactGA.initialize('G-MH4WR2K7MV')
}


const App: React.FC = () => {

  return (
    <StoreProvider>
      <BrowserRouter>
        <Router />
        <ToastContainer style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
        <PwaInstall />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
