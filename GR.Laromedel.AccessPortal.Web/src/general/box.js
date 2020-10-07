import React from 'react'

export default function Box({ children }) {
  return (
    <div className="bg-white rounded shadow-xl p-6">
      {children}
    </div>
  )
}