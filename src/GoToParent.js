import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import backArrow from './back-arrow.svg';

function GoToParent(props) {
  return (
    <div className="go-to-parent">
      <Link to={"./" + props.parentCollection}>
        <img src={backArrow} alt="back arrow icon"/>
        <p>all {props.parentCollection}</p>
      </Link>
    </div>
  );
}

GoToParent.propTypes = {
  parentCollection: propTypes.string.isRequired
}

export default GoToParent;