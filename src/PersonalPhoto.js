import React from 'react';
import propTypes from 'prop-types';

function PeronalPhoto(props) {
  return (
    <div className="personal-photo wrap-out">
      <div className="wrap-in">
        <img src={props.image.url} alt={props.image.caption}/>
      </div>
    </div>
  );
}

PeronalPhoto.propTypes = { 
  image: propTypes.object.isRequired
}

export default PeronalPhoto;