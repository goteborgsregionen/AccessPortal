import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logout from './components/logout';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';
import Box from './components/common/box';
import Container from './components/common/container';
import AuthProvider from './components/auth/auth-provider';
import AuthContainer from './components/auth/auth-container';
import About from './pages/about';
import Privacy from './pages/privacy';
import Resources from './pages/resources';
import Welcome from './pages/welcome';
import { ThemeProvider } from './utilities/themeContext';
import Layout from './components/layout';

function AuthenticatedApp() {
  return (
    <AuthProvider>
        <AuthContainer>
          <Layout>
            <Container>
              <Logout />
              <Header />
              <Box>
                <Switch>
                  <Route path="/about" exact component={About} />
                  <Route path="/privacy" exact component={Privacy} />
                  <Route path="/">
                    <Resources />
                  </Route>
                </Switch>
              </Box>
            </Container>
            <Footer />
          </Layout>
        </AuthContainer>
      </AuthProvider>
  );
}

function UnauthenticatedApp() {
  return (
    <>
      <Container>
        <Login />
        <Header />
        <Box>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/privacy" exact component={Privacy} />
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

function App() {
  // make some kind of check here if teacher or pupil is signed in, just to show
  return (
    <div className="">
      <Switch>
        <Route path="/atkomstportalen">
          <AuthenticatedApp />
        </Route>
        <Route path="/">
          <UnauthenticatedApp />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('app'),
);
