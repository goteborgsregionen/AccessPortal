import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const apiUrl = process.env.API_URL

const License = function ({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  )
}

const App = function () {
  const [licenses, setLicenses] = useState([])

  useEffect(() => {
    const fetchLicenses = async () => {
      const response = await fetch(`${apiUrl}/license`)
      const json = await response.json()

      setLicenses(json)
    }

    fetchLicenses()
  }, [])
  
  return (
    <div>
      <h1>Licenses!</h1>
      {licenses.map(license =>
        <License
          key={license.title}
          title={license.title}
          description={license.description}
        />)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))