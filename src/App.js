import React from 'react';
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
//import Home from './components/Home'
//import Content from './components/Content'
import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'
//import Title from './components/styles/Title.styled'
//import Footer from './components/Footer'

const theme = {
  colors: {
    header: '#b3dbc9',
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
         <p>Hello World</p>
        </Container>
        
    
       
      </>
    </ThemeProvider>
  )
}

export default App
