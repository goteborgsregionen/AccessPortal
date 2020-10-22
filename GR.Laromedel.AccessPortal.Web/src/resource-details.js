import React from 'react';
import CopyIcon from './icons/copy'
import ExternalLinkIcon from './icons/external-link'
import MovieIcon from './icons/movie'

export default function ResourceDetails() {
  return (
    <div className="bg-gray-100 rounded p-6 mb-12 w-11/12">
      <h4 className="text-2xl">Biologi för alla</h4>
      <h5 className="text-lg">Cellerna som byggde världen</h5>

      <div className="flex mt-6 gap-8">
        <div className="w-1/3">
          <div className="flex items-center mb-3">
            <p className="text-lg border-r border-gray-400 mr-2 pr-2">Biologi</p>
            <p className="text-lg border-r border-gray-400 mr-2 pr-2">Åk 7-9</p>
            <MovieIcon />
          </div>
          <div className="mb-3">
            <p className="mb-1">
              <span className="font-thin">Manusförfattare:</span> Niclas Darwin
            </p>
            <p className="mb-1">
              <span className="font-thin">Längd:</span> 48 min
            </p>
            <p>
              <span className="font-thin">Språk:</span> Svenska
            </p>
          </div>
          <div className="border border-gray-300 p-2">
            <p className="mb-1">
              <span className="font-thin">Förlag:</span> Bergs Education
            </p>
            <p className="mb-1">
              <span className="font-thin">Upplaga:</span> 2
            </p>
            <p>
              <span className="font-thin">Artikelnummer:</span> 548930910-8
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <p className="font-serif leading-normal overflow-y-scroll h-24 pr-6 mb-12">
            Biologi för alla  är riktad till åk 7-9 och fungerar som en introduktion till ämnet biologi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim laboris nisi ut aliquip ex ea commodo consequat. Duis consectetur adipiscing elit, sed do dolore magna aliqua. Ut enim laboris nisi ut aliquip ex ea commodo consequat. Duis consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex justify-end gap-4">
            <button className="flex items-center text-xl gap-2 px-6 py-3 rounded bg-gray-200 text-green-600 hover:bg-gray-300 focus:outline-none focus:shadow-outline">
              <CopyIcon />
              Kopiera länk
            </button>
            
            <button className="flex items-center text-xl gap-2 px-6 py-3 rounded bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:shadow-outline">
              <ExternalLinkIcon />
              Öppna lärresurs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
