import React from 'react';
import Resource from './resource';

export default function ResourceList({ resources }) {
  return (
    <div className="relative w-full h-full">
      <div className="flex overflow-x-scroll">
        {
          resources.map(resource =>
            <Resource
              key={resource.title}
              data={resource}
            />
            )
          }
      </div>
      <div className="absolute z-20 top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
