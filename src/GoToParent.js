import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

function GoToParent(props) {
  return (
    <div className="go-to-parent">
      <Link to={"/" + props.parentCollection}>
        <svg fill="#435472" height={22} viewBox="0 0 24 24" width={22}><path d="M0 0h24v24H0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
        <p>all {props.parentCollection}</p>
      </Link>
    </div>
  );
}

GoToParent.propTypes = {
  parentCollection: propTypes.string.isRequired
}

export default GoToParent;