import React, { useEffect, useState } from 'react'

const apiUrl = process.env.API_URL

const Resource = function ({ title, description }) {
  return (
    <div className="relative mr-4 flex-none">
      <img src={'https://via.placeholder.com/180x240'} />
      <div className="absolute bg-gradient-to-t from-gray-900 to-transparent bottom-0 p-2">
        <h4 className="text-white font-bold">{title}</h4>
        <p className="text-white">{description.substring(0, 30)}...</p>
      </div>
    </div>
  )
}

export default function ResourceList() {
  const [resources, setResources] = useState([])

  useEffect(() => {
    const fetchResources = async () => {
      const response = await fetch(`${apiUrl}/resources`)
      const json = await response.json()

      setResources(json)
    }

    fetchResources()
  }, [])
  
  return (
    <div className="relative w-full h-full">
      <div className="flex overflow-x-scroll">
        {
          resources.map(resource =>
            <Resource
              key={resource.title}
              title={resource.title}
              description={resource.description}
            />
            )
          }
      </div>
      <div className="absolute z-20 top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}
