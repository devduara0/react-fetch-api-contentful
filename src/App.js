import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Content from './components/Content'
import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'


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
         <Content />
        </Container>
        
    
       
      </>
    </ThemeProvider>
  )
}

export default App
