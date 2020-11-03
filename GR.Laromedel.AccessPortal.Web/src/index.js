import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logout from './components/logout';
import Header from './components/header';
import Footer from './components/footer';
import Box from './components/common/box';
import Container from './components/common/container';
import AuthProvider from './components/auth/authprovider';
import AuthContainer from './components/auth/authcontainer';
import About from './components/about';
import Privacy from './components/privacy';
import Resources from './components/resources';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthContainer>
          <Container>
            <Logout />
            <Header />
            <Box>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/privacy">
                  <Privacy />
                </Route>
                <Route path="/">
                  <Resources />
                </Route>
              </Switch>
            </Box>
          </Container>
          <Footer />
        </AuthContainer>
      </AuthProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
