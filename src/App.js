import React from 'react';
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'

const theme = {
  colors: {
    header: '#ff0000',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
       
       
      </>
    </ThemeProvider>
  )
}

export default App
