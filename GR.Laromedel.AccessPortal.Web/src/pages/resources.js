import React, { useEffect, useState } from 'react';
import ResourceList from '../components/resource/resource-list';
import { groupResourcesBySubject } from '../utilities/resources';
import { useAuth } from 'oidc-react';
import apiUrl from '../utilities/apiUrl';

export default () => {
  //const [groupedResources, setGroupedResources] = useState([]);
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const auth = useAuth();

  useEffect(() => {
    const fetchResources = async () => {
      const user = await auth.userData;
      const response = await fetch(`${apiUrl}/resources`, {
        headers: {
          Authorization: 'Bearer ' + user.access_token,
        },
      });
      const resources = await response.json();
      resources.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setResources(resources);
      //setGroupedResources(groupResourcesBySubject(resources));
      setIsLoading(false);
    };

    fetchResources();
  }, []);

  return (
    <div className='resources'>
      <h1>Dina Lärresurser</h1>
      {isLoading && 
        <>
          <p>Laddar dina lärresurser ...</p>
        </>}
      {!isLoading && resources.length == 0 &&
        <>
          <p>Vi kunde tyvärr inte hitta några lärresurser du har tillgång till.</p>
        </>}
        <ResourceList resources={resources} />
      {/* {groupedResources.map(({ subject, resources }) => (
        <div key={subject} className="subject">
          <h2>{subject ? subject : 'Övriga ämnen'}</h2>
          <ResourceList resources={resources} />
        </div>
      ))} */}
    </div>
  );
};
