import React from 'react';
import propTypes from 'prop-types';

function ProviderPoint(props) {
  const {provider} = props;
  
  return (
    <tr>
      <td>Provider:</td>
      <td><a href={provider.link}>{provider.title}</a></td>
    </tr>
  )
}

ProviderPoint.propTypes = {
  provider: propTypes.object.isRequired
}

export default ProviderPoint;