import React, { useEffect, useState } from 'react'

const apiUrl = process.env.API_URL

const License = function ({ title, description }) {
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

export default function LicenseList() {
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
    <div className="relative w-full h-full">
      <div className="flex overflow-x-scroll">
        {
          licenses.map(license =>
            <License
              key={license.title}
              title={license.title}
              description={license.description}
            />
            )
          }
      </div>
      <div className="absolute z-20 top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}
