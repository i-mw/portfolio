import React from 'react';
import propTypes from 'prop-types';

function PublisherPoint(props) {
  return (
        <li className="wrap-out">
          <div className="wrap-in">
            <p>Publisher:</p>
            <div className="answer">
              <p>{props.publisher}</p>
            </div>
          </div>
        </li>
  )
}

PublisherPoint.propTypes = {
  publisher: propTypes.string.isRequired
}

export default PublisherPoint;