import React from 'react';
import propTypes from 'prop-types';

function Logo(props) {
  return (
    <div className="logo wrap-out">
      <div className="wrap-in">
        <img src={props.image.url} alt={props.image.caption}/>
        {/* <pre dangerouslySetInnerHTML={{__html: props.logoText}}></pre> */}
      </div>
    </div>
  );
}

Logo.propTypes = {
  logoText: propTypes.string.isRequired
}

export default Logo;