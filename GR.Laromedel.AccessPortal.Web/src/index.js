import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Logout from './logout';
import Header from './header';
import Footer from './footer';
import Box from './general/box';
import Container from './general/container';
import AuthProvider from './general/authprovider';
import AuthContainer from './general/authcontainer';
import About from './about.js';
import Privacy from './privacy.js';
import Resources from './resources.js';

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
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
