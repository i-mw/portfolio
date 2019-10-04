import React from 'react';
import propTypes from 'prop-types';

function Logo(props) {
  return (
    <div className="logo wrap-out">
      <div className="wrap-in">
        <img src={props.logoImage.url} alt={props.logoImage.caption}/>
        {/* <pre dangerouslySetInnerHTML={{__html: props.logoText}}></pre> */}
      </div>
    </div>
  );
}

Logo.propTypes = {
  logoText: propTypes.string.isRequired,
  logoImage: propTypes.object.isRequired
}

export default Logo;