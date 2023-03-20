import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './config/theme/theme'
import App from './core'
import 'normalize.css'
import './index.css'

const { createRoot } = ReactDOM

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
