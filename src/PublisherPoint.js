import React from 'react';
import propTypes from 'prop-types';

function PublisherPoint(props) {
  return (
        <li>
          <p>Publisher:</p>
          <div className="answer">
            <p>{props.publisher}</p>
          </div>
        </li>
  )
}

PublisherPoint.propTypes = {
  publisher: propTypes.string.isRequired
}

export default PublisherPoint;