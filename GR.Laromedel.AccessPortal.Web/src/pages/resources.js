import React, { useEffect, useState } from 'react';
import ResourceList from '../components/resource/resource-list';
import { groupResourcesBySubject } from '../utilities/resources';
import { useAuth } from 'oidc-react';

const apiUrl = process.env.API_URL;
const mockdata = [{
  resources: [{
    "articleId": "00000000-0000-0000-0000-000000000000",
    "title": "SOL 4000 Samhälle i dag 7 Lärarhandledning Webb",
    "resourceUri": null,
    "articleNumber": "9789127409552",
    "collectionTitle": "SOL 4000",
    "collectionPartNumber": null,
    "coverImageThumb": "http://bokinfo.se/Images/Products/Small/978912/9789127409552.jpg",
    "coverImageFull": "http://bokinfo.se/Images/Products/Medium/978912/9789127409552.jpg",
    "edition": 1,
    "description": "<p>\n    Samhälle i dag 7 handlar främst om närsamhället, individen och de gemenskaper vi ingår i. Boken innehåller bl?a kapitel om vardagsekonomi, lag och rätt och ungdomskulturer. Varje kapitel inleds med ett bilduppslag som utgångspunkt för diskussion.</p>\nLärarhandledningen\n<p>Lärarhandledningen beskriver ämnets karaktär och syfte, kursplanens centrala innehåll och innehåller hjälp och stöd till bedömning, undervisningstips, facit och arbetsblad till eleverna. Lärarhandledningen består av nedladdningsbara pdf:er och kan delas med lärare på skolan.</p> Licenstid: 365 dagar",
    "contributors": "",
    "displayLanguages": [
    "Svenska"
    ],
    "languages": "Svenska",
    "supplierName": "Natur & Kultur",
    "subjects": [
    "Samhällskunskap"
    ],
    "grades": [
    "7-9"
    ]
    }],
    subject: ['Svenska']
  },
]
export default () => {
  const [groupedResources, setGroupedResources] = useState([]);
  const auth = useAuth();

  /*useEffect(() => {
    const fetchResources = async () => {
      const user = await auth.userData;
      const response = await fetch(`${apiUrl}/resources`, {
        headers: {
          Authorization: 'Bearer ' + user.access_token,
        },
      });
      const resources = await response.json();
      console.log(resources)
      setGroupedResources(groupResourcesBySubject(resources));
    };

    fetchResources();
  }, []);
  */
useEffect(() => {
  setGroupedResources(mockdata)
})


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
