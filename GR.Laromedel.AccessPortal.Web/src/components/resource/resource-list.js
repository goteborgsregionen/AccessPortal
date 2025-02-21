import React, { useState, useRef, useEffect } from 'react';
import ResourceDetails from './resource-details';
import ResourceTile from './ResourceTile';

export default function ResourceList({ resources }) {
  const [selectedResource, setSelectedResource] = useState();
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSelectedResource(null);
    }
  };

  useEffect(() => {
    if (selectedResource) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedResource]);

  return (
    <>
      <div className="resource-list">
        <div className="tiles">
          {resources.map((resource) => (
            <ResourceTile
              key={resource.title}
              resource={resource}
              isDetailsShown={!!selectedResource}
              onClick={() => setSelectedResource(resource)}
            />
          ))}
        </div>
      </div>
      {selectedResource && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <ResourceDetails resource={selectedResource} onClose={() => setSelectedResource(null)} />
          </div>
        </div>
      )}
    </>
  );
}
