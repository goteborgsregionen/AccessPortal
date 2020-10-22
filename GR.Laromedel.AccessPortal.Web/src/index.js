import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ResourceList from './resource-list';
import Header from './header';
import Box from './general/box';
import Container from './general/container';
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
    <Container>
      <Header />
      <Box>
        {
          groupedResources.map(({ subject, resources }) => (
            <div key={subject} className="mb-8">
              <h2 className="text-xl mb-4">{subject}</h2>
              <ResourceList resources={resources} />
            </div>
          ))
        }
      </Box>
    </Container> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
