import React from 'react';

export default function Resource({ data }) {
  return (
    <div className="w-1/4 mr-4">
      <a
        href={data.resourceUri}
        target="_blank"
        className="block w-full mb-2 flex-none bg-cover bg-center rounded shadow"
        style={{ backgroundImage: `url(${data.coverImageFull})`, paddingBottom: '100%' }}
      />

      <h4 className="font-bold text-sm ml-1">{data.title}</h4>
    </div>
  );
}
