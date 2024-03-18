import React, { useEffect, useState } from 'react';
import ResourceList from '../components/resource/resource-list';
import { groupResourcesBySubject } from '../utilities/resources';
import { useAuth } from 'oidc-react';
import apiUrl from '../utilities/apiUrl';

export default () => {
  const [groupedResources, setGroupedResources] = useState([]);
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

      setGroupedResources(groupResourcesBySubject(resources));
      setIsLoading(false);
    };

    fetchResources();
  }, []);

  return (
    <>
      <h1 className="text-primary text-2xl">Dina Lärresurser</h1>
      {isLoading && 
        <>
          <p className="my-4 text-primary">Laddar dina lärresurser ...</p>
        </>}
      {!isLoading && groupedResources.length == 0 &&
        <>
          <p className="my-4 text-primary">Vi kunde tyvärr inte hitta några lärresurser du har tillgång till.</p>
        </>}
      {groupedResources.map(({ subject, resources }) => (
        <div key={subject} className="mb-8">
          <h2 className="text-xl my-4 text-primary">{subject ? subject : 'Övriga ämnen'}</h2>
          <ResourceList resources={resources} />
        </div>
      ))}
    </>
  );
};
