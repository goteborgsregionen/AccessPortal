import React, { useEffect, useState } from 'react';
import ResourceList from '../components/resource/resource-list';
import { groupResourcesBySubject } from '../utilities/resources';
import { useAuth } from 'oidc-react';

const apiUrl = process.env.API_URL;

export default () => {
  const [groupedResources, setGroupedResources] = useState([]);
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
    };

    fetchResources();
  }, []);

  return (
    <>
      <h1 className="text-primary text-2xl">Dina Läraresurser</h1>
      {groupedResources.map(({ subject, resources }) => (
        <div key={subject} className="mb-8">
          <h2 className="text-xl my-4 text-primary">{subject ? subject : 'Övriga ämnen'}</h2>
          <ResourceList resources={resources} />
        </div>
      ))}
    </>
  );
};
