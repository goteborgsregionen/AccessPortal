import React, { useEffect, useState } from 'react';
import ResourceList from '../components/resource/resource-list';
import { groupResourcesBySubject } from '../utilities/resources';
import { useAuth } from 'oidc-react';

const apiUrl = process.env.API_URL;
const mockdata = [
  {
    resources: [{
      title: '',
      articleNumber: '', 
      contributors: '',
      coverImageFull: '',
      supplierName: '',
      isbn: '',
      languages: 'Svenska',
      description: '', 

    }],
    subject: 'Matte',
  },
];



export default () => {
  const [groupedResources, setGroupedResources] = useState([]);
  const auth = useAuth();

   useEffect(() => {
     const fetchResources = async () => {
       const user = await auth.userData;
       console.log('userData', user)
       const response = await fetch(`${apiUrl}/resources`, {
         headers: {
           Authorization: 'Bearer ' + user.access_token,
         },
       });
       const resources = await response.json();
       console.log("fetched resources",resources)
       setGroupedResources(groupResourcesBySubject(resources));
     };

     fetchResources();
   }, []);

  useEffect(() => {
    setGroupedResources(mockdata);
  }, []);

  return (
    <>
      {groupedResources.map(({ subject, resources }) => {
        console.log({ resources, subject });
        return (
          <div key={subject} className="mb-8">
            <h2 className="text-lg font-bold mb-4">{subject}</h2>
            <ResourceList resources={resources} />
          </div>
        );
      })}
    </>
  );
};
