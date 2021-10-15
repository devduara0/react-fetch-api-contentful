import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'


const theme = {
  colors: {
    header: '#ebfbff',
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
        <p>Hello World!</>
       
      </>
    </ThemeProvider>
  )
}

export default App
