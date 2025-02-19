import React from 'react';
import CopyIcon from '../../assets/icons/copy';
import ExternalLinkIcon from '../../assets/icons/external-link';
import MovieIcon from '../../assets/icons/movie';
import CloseIcon from '../../assets/icons/close';
import parse from 'html-react-parser';
import apiUrl from '../../utilities/apiUrl';

export default function ResourceDetails({ resource, onClose }) {
  const copyLink = (link) => navigator.clipboard.writeText(link);

  return (
    <div className="resource-details">
      <div className="header">
        <div>
          <h4>{resource.title}</h4>
          {/*<h5 className="text-lg">Lorem ipsum dolor sit amet</h5>*/}
        </div>
        <button onClick={onClose}>
          <CloseIcon />
          <span>Stäng</span>
        </button>
      </div>

      <div className="resource-information">
        <div className="left-section">
          <div className="subjects-and-grade">
            <p>
              {resource.subjects.map((subject) => subject)}
            </p>
            <p>
              {resource.grades.map((grade) => grade)}
            </p>
            {/*<MovieIcon />*/}
          </div>
          <div className="contributors-and-language">
            {resource.contributors && (
              <p>
                <span>Författare:</span> {resource.contributors}
              </p>
            )}
            <p>
              <span>Språk:</span> {resource.languages}
            </p>
          </div>
          <div className="publish-information">
            <p>
              <span>Förlag:</span> {resource.supplierName}
            </p>
            <p>
              <span>Upplaga:</span> {resource.edition}
            </p>
            <p>
              <span>Artikelnummer:</span> {resource.articleNumber}
            </p>
          </div>
        </div>
        <div className="right-section">
          <div className="description">
            {parse(resource.description)}
          </div>

          <div className="controls">
            <button
              className="copy-button"
              onClick={() => copyLink(resource.resourceUri)}
            >
              <CopyIcon /> 
              Kopiera länk
            </button>
            <button className="open-resource-button">
              <a
                href={`${apiUrl}/redirection/?url=${resource.resourceUri}`}
                target="_blank"
                
              >
                <ExternalLinkIcon />
                Öppna lärresurs
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
