import React from 'react';

export default function Resource({ data, isSelected, onClick }) {
  return (
    <div className="w-1/4 mr-4">
      <div
        onClick={onClick}
        target="_blank"
        className={
          'relative overflow-hidden block w-full mb-2 flex-none rounded-lg cursor-pointer shadow-inner' +
          (isSelected ? ' border-4 border-green-500' : ' border-4 border-white')
        }
        role="button"
        style={{
          backgroundImage: `url(${data.coverImageFull})`,
          paddingBottom: '100%',
          backgroundSize: '110%',
          backgroundPosition: 'center',
        }}
      >
        {/* <div className="absolute bg-green-500 w-16 h-16 top-0 right-0" style={{ borderRadius: '40%', marginTop: '-1.7rem', marginRight: '-1.7rem' }} /> */}
      </div>

      <h4 className="ml-1 text-primary">{data.title}</h4>
    </div>
  );
}
