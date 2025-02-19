import React from 'react';
import ExternalLinkIcon from '../../assets/icons/external-link';
import apiUrl from '../../utilities/apiUrl';

const ResourceTile = ({ resource, onClick }) => {
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

  return (
    <div className="resource-tile">
      <div className="image-and-info">
        <a href={`${apiUrl}/redirection/?url=${resource.resourceUri}`} target="_blank">
          <img
            src={imgUrl(resource.coverImageFull)}
            alt={resource.title}
            className="image"
            role="button"
          />
        </a>
        <div className="info">
          <h3>{resource.title}</h3>
          <p>
            <span>Förlag:</span> {resource.supplierName}
          </p>
        </div>
      </div>
      <div className="buttons">
        <button className="open-resource-button">
          <a href={`${apiUrl}/redirection/?url=${resource.resourceUri}`} target="_blank">
            <ExternalLinkIcon />
            Öppna resurs
          </a>
        </button>
        <button className="more-button" onClick={onClick}>
          Mer information
        </button>
      </div>
    </div>
  );
};

export default ResourceTile;
