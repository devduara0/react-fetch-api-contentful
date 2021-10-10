import React from 'react';
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'
//import Title from './components/styles/Title.styled'
import Footer from './components/Footer'

const theme = {
  colors: {
    header: '#00ffff',
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
       <Container>
         
        </Container>
        <Footer />
       
      </>
    </ThemeProvider>
  )
}

export default App
