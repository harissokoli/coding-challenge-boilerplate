import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import Router from './router'
import Breadcrumbs from './components/Breadcrumbs'

import Provider from './store/provider'

import './styles/index.css'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
        <BrowserRouter>
          <Breadcrumbs />
          <Router />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
