import React from 'react'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import '../node_modules/react-toastify/dist/ReactToastify.css'
import 'react-tabs/style/react-tabs.css'



const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Router />
      <ToastContainer style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }} />
    </BrowserRouter>
  )
}

export default App
