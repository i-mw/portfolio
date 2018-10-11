import React from 'react';
import propTypes from 'prop-types';

function Logo(props) {
  return (
    <div className="logo wrap-out">
      <div className="wrap-in">
        <pre dangerouslySetInnerHTML={{__html: props.logoText}}></pre>
      </div>
    </div>
  );
}

Logo.propTypes = {
  logoText: propTypes.string.isRequired
}

export default Logo;