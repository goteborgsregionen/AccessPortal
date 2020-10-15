import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ResourceList from './resource-list';
import Header from './header';
import Footer from './footer';
import Box from './general/box';
import Container from './general/container';
import { groupResourcesBySubject } from './utilities/resources';

const apiUrl = process.env.API_URL;

function App() {
  const [groupedResources, setGroupedResources] = useState([]);

  return (
    <>
      <Container>
        <Header />
        <Box>
          <p>Den här sidan är skapad av <a href="https://goteborgsregionen.se">Göteborgsregionen</a> för att hjälpa elever och lärare att enkelt använda digitala läromedel.</p>
        </Box>
      </Container> 
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
