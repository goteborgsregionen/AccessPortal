import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ResourceList from './resource-list';
import Header from './header';
import Footer from './footer';
import Box from './general/box';
import Container from './general/container';
import About from './about.js';
import Privacy from './privacy.js';
import { groupResourcesBySubject } from './utilities/resources';

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
    <BrowserRouter>
      <Container>
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
              {
                groupedResources.map(({ subject, resources }) => (
                  <div key={subject} className="mb-8">
                    <h2 className="text-lg font-bold mb-4">{subject}</h2>
                    <ResourceList resources={resources} />
                  </div>
                ))
              }
            </Route>
          </Switch>
        </Box>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
