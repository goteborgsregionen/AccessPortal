import React from 'react'
import ReactDOM from 'react-dom'
import ResourceList from './resource-list'
import Header from './header'
import Box from './general/box'
import Container from './general/container'

function App() {
  return (
    <Container>
      <Header />
      <Box>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Svenska</h2>
          <ResourceList />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Engelska</h2>
          <ResourceList />
        </div>
      </Box>
    </Container> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
