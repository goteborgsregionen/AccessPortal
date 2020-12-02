import React, { useEffect, useState } from 'react';
import ResourceList from '../components/resource/resource-list';
import { groupResourcesBySubject } from '../utilities/resources';
import { useAuth } from 'oidc-react';
import { useHistory } from 'react-router-dom';

const apiUrl = process.env.API_URL;

export default () => {
  const [groupedResources, setGroupedResources] = useState([]);
  const auth = useAuth();
  let history = useHistory();

  if (!auth.userData) history.push('/unauthorized');

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
      {groupedResources.map(({ subject, resources }) => (
        <div key={subject} className="mb-8">
          <h2 className="text-lg font-bold mb-4">{subject}</h2>
          <ResourceList resources={resources} />
        </div>
      ))}
    </>
  );
};
