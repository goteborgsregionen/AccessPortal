import React, { useState } from 'react';
import Resource from './resource';
import ResourceDetails from './resource-details';

export default function ResourceList({ resources }) {
  const [selectedResource, setSelectedResource] = useState();

  return (
    <>
      <div className="relative w-full h-full">
        <div className={`flex overflow-x-auto`}>
          {resources.map((resource) => (
            <Resource
              key={resource.title}
              data={resource}
              isSelected={selectedResource && selectedResource.title === resource.title}
              onClick={() => setSelectedResource(resource)}
            />
          ))}
        </div>
        <div className="absolute z-20 top-0 right-0 h-full w-16 bg-gradient-to-l from-fade to-transparent" />
      </div>
      {selectedResource && (
        <div className="mt-4">
          <ResourceDetails resource={selectedResource} onClose={() => setSelectedResource(null)} />
        </div>
      )}
    </>
  );
}
