// Card.js
import React from 'react';

function Card({ title, imageSrc, description, price, availability }) {
  return (
    <div className="col">
      <div className="card border border-gray-200" style={{ width: '15rem' }}>
      <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
          <img
            alt={title}
            className="card-img-top"
            src={imageSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="card-body">
          <h3 className="card-title fw-bold ">{title}</h3>
          {/* <p className="card-text text-truncate">{description}</p> */}
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="card-title">${price}</h4>
            <span className="text-muted">{availability}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
