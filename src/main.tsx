import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import Router from './router'
import Breadcrumbs from './components/Breadcrumbs'

import './styles/index.css'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Breadcrumbs />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
