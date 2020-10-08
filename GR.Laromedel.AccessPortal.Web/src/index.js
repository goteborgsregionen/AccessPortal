import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ResourceList from './resource-list';
import Header from './header';
import Box from './general/box';
import Container from './general/container';
import Filter from './filter';
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

  const subjects = ['Svenska', 'Engelska', 'Biologi', 'Matematik', 'Musik', 'Religion', 'Historia'];
  const ages = ['F-3', '4-6', '7-9'];
  const categories = ['Artiklar', 'Böcker', 'Film', 'Ljud', 'Spel'];

  return (
    <Container>
      <Header />
      <Box>
        <Filter subjects={subjects} ages={ages} categories={categories} />
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
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
