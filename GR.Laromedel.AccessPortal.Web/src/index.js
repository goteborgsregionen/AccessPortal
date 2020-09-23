import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Box, CssBaseline } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import LicenseList from './license-list'
import Header from './header'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#dbffff',
      main: '#a9cee0',
      dark: '#799dae',
      contrastText: '#000',
    },
    secondary: {
      light: '#50a095',
      main: '#1a7167',
      dark: '#00453d',
      contrastText: '#fff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Container>
        <Header />
        <Box> 
          <LicenseList />
        </Box>
      </Container> 
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
