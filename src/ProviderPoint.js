import React from 'react';
import propTypes from 'prop-types';

function ProviderPoint(props) {
  const {provider} = props;
  
  return (
    <li>
      <p>Provider:</p>
      <div className="answer">
        <p><a href={provider.link}>{provider.title}</a></p>
      </div>
    </li>
  )
}

ProviderPoint.propTypes = {
  provider: propTypes.object.isRequired
}

export default ProviderPoint;