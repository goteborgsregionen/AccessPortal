import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logout from './components/logout';
import Header from './components/header';
import Footer from './components/footer';
import Box from './components/common/box';
import Container from './components/common/container';
import AuthProvider from './components/auth/auth-provider';
import AuthContainer from './components/auth/auth-container';
import About from './pages/about';
import Privacy from './pages/privacy';
import Resources from './pages/resources';
import Unauthorized from './pages/unauthorized';
import Restricted from './components/auth/auth-restricted';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      {/*<AuthContainer>*/} 
          <Container>
            <Logout />
            <Header />
            <Box>
              <Switch>
              <Route path="/unauthorized">
                  <Unauthorized />
                </Route>
                <Restricted path="/about" exact component={About} />
                <Restricted path="/privacy" exact component={Privacy} />
                <Route path="/">
                  <Resources />
                </Route>
              </Switch>
            </Box>
          </Container>
          <Footer />
        {/*</AuthContainer>*/} 
      </AuthProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
