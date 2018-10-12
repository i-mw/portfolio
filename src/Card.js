import React from 'react';
import propTypes from 'prop-types';
import LangIndicator from './LangIndicator';
import {Link} from 'react-router-dom'

function Card(props) {
  const {docData, parentCol} = props;

  return (
    <li className="wrap-out current">
      <Link to={'./' + parentCol + '/'+ docData.id} className="wrap-in">
        {
          docData.images && 
          <div className="image-container"
            style={{backgroundImage: "url('" + docData.images
              .find(image => image.placing === 'thumbnail').url + "')"}}></div>
        }
        <div className="text">
            <p>{docData.title}</p>
            <LangIndicator primaryLang={docData.primaryLanguage}/>
        </div>
      </Link>
    </li> 
  );
}

Card.propTypes = {
  docData: propTypes.object.isRequired,
  parentCol: propTypes.string.isRequired
}

export default Card;