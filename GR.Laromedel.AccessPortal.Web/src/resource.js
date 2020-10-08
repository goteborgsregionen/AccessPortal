import React from 'react';

export default function Resource({ data }) {
  return (
    <a href={data.resourceUri} target="_blank" className="block relative mr-4 flex-none">
      <img src={data.imageUri} />
      <div className="absolute bg-gradient-to-t from-gray-900 to-transparent bottom-0 p-2">
        <h4 className="text-white font-bold">{data.title}</h4>
        <p className="text-white">{data.description.substring(0, 30)}...</p>
      </div>
    </a>
  );
}