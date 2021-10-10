import React from 'react';
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import Title from './components/styles/Title.styled'

const theme = {
  colors: {
    header: '#00ffff',
    body: '#fff',
    
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
       <Title>
       Test
      </Title>
       
      </>
    </ThemeProvider>
  )
}

export default App
