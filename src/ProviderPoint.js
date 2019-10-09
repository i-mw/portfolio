import React from 'react';
import propTypes from 'prop-types';

function ProviderPoint(props) {
  const {provider} = props;
  
  return (
    <li className="wrap-out">
      <div className="wrap-in">
        <p>Provider:</p>
        <div className="answer">
          <p><a target="blank" href={provider.link}>{provider.title}</a></p>
        </div>
      </div>
    </li>
  )
}

ProviderPoint.propTypes = {
  provider: propTypes.object.isRequired
}

export default ProviderPoint;