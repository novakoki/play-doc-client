import React from 'react';
import PropTypes from 'prop-types';


function Card({ title = 'title', more = '#', children }) {
  return (
    <div className="card">
      <h3 className="card-title">{ title }</h3>
      <a className="card-more" href={ more }></a>
      <div className="card-content">{ children }</div>
    </div>
  );
}
