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
          <p>Den här sidan använder varken cookies eller någon persondata just nu. Men det kommer nog ändras i framtiden när man faktiskt kan logga in och se sina läromedel!</p>
        </Box>
      </Container> 
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
