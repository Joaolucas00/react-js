import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './Routes.tsx'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import { createStandaloneToast } from '@chakra-ui/toast'

const { ToastContainer, toast } = createStandaloneToast()



ReactDOM.createRoot(document.getElementById('root')!).render(
//  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer/>
    </Provider>
// </React.StrictMode>,
)
