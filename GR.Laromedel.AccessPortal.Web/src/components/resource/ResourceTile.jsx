import React from 'react';
import ExternalLinkIcon from '../../assets/icons/external-link';
import apiUrl from '../../utilities/apiUrl';

const ResourceTile = ({ resource, onClick, isDetailsShown }) => {
  const imgUrl = (src) => {
    if (
      src?.indexOf('goteborgsregionen.se/') >= 0 ||
      src?.startsWith('data:image') ||
      src?.startsWith('/') ||
      src?.startsWith('http')
    ) {
      return src;
    }

    return (
      'https://api.laromedel.goteborgsregionen.se/media/getExternalImage?src=' +
      encodeURIComponent(src)
    );
  };

  const handleMoreButtonClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a
      href={isDetailsShown ? '' : `${apiUrl}/redirection/?url=${resource.resourceUri}`}
      target="_blank"
    >
      <div className="resource-tile">    
        <div className="image-and-info">
          <img
            src={imgUrl(resource.coverImageFull)}
            alt={`Öppna ${resource.title}`}
            className="image"
          />

          <div className="info">
            <p>{resource.subjects.join(", ")}</p>
            <h3>{resource.title}</h3>
            <p>
              <span>Förlag:</span> {resource.supplierName}
            </p>
          </div>
        </div>
        <div className="buttons">
          <button className="primary-button">
            <ExternalLinkIcon />
            Öppna resurs
          </button>
          <button className="secondary-button" onClick={handleMoreButtonClick}>
            Mer information
          </button>
        </div>
      </div>
    </a>
  );
};

export default ResourceTile;
