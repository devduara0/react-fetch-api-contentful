//import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#3a00df',
    footer: '#003333',
    
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <p>Hello World!One</p>
       
      </>
    </ThemeProvider>
  )
}

export default App
