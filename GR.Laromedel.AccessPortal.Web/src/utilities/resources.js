export function groupResourcesBySubject(resources) {
  return resources.reduce((groupedResources, resource) => {
    const subject = resource.classifications['Ämne'][0];
    const existingSubjectGroup = groupedResources.find(group => group.subject === subject);

    return [
      ...groupedResources.filter(group => group.subject !== subject),
      {
        subject,
        resources: existingSubjectGroup
          ? [...existingSubjectGroup.resources, resource]
          : [resource]
      }
    ];
  }, []);
}