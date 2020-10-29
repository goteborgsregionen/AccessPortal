import React, { useEffect, useState } from 'react';
import ResourceList from './resource-list';
import { groupResourcesBySubject } from './utilities/resources';
import { useAuth } from 'oidc-react';

const apiUrl = process.env.API_URL;

export default () => {

    const [groupedResources, setGroupedResources] = useState([]);
    const auth = useAuth();

    useEffect(() => {
        const fetchResources = async () => {

            const user = await auth.userData;
            const response = await fetch(`${apiUrl}/resources`, {headers: {
                "Authorization": "Bearer " + user.access_token
            }})
            const resources = await response.json()

            setGroupedResources(groupResourcesBySubject(resources))
        }

        fetchResources()
    }, []);

    return (
        <>
            {
                groupedResources.map(({ subject, resources }) => (
                    <div key={subject} className="mb-8">
                        <h2 className="text-lg font-bold mb-4">{subject}</h2>
                        <ResourceList resources={resources} />
                    </div>
                ))
            }

        </>
    )
}
