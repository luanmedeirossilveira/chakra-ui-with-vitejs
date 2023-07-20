import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { App } from './App'
import './assets/scss/index.scss'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)