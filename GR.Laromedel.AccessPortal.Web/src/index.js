import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ResourceList from './resource-list';
import Header from './header';
import Footer from './footer';
import Logout from './logout';
import Box from './general/box';
import Container from './general/container';
import AuthContainer from './general/authcontainer';
import { groupResourcesBySubject } from './utilities/resources';
import { AuthProvider } from 'oidc-react';
import { oidcConfig } from './config/oidcconfig';

const apiUrl = process.env.API_URL;

function App() {
    const [groupedResources, setGroupedResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            const response = await fetch(`${apiUrl}/resources`)
            const resources = await response.json()

            setGroupedResources(groupResourcesBySubject(resources))
        }

        fetchResources()
    }, []);

    return (
        <AuthProvider {...oidcConfig} onSignIn={() => window.location.search = ''}>
            <AuthContainer>
                <Container>
                    <Logout />
                    <Header />
                    <Box>
                        {
                            groupedResources.map(({ subject, resources }) => (
                                <div key={subject} className="mb-8">
                                    <h2 className="text-lg font-bold mb-4">{subject}</h2>
                                    <ResourceList resources={resources} />
                                </div>
                            ))
                        }
                    </Box>
                </Container>
                <Footer />
            </AuthContainer>
        </AuthProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
