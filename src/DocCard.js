import React from 'react';
import propTypes from 'prop-types';
import LangIndicator from './LangIndicator';
import {Link} from 'react-router-dom'

function DocCard(props) {
  const {docData, parentCol} = props;
  const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/' + 
    'portfolio-v2-9ca05.appspot.com/o/placeholder.png?' +
    'alt=media&token=97415612-b965-4f82-b608-adf77e574707';

  return (
    <li className={docData.dates.endedAt ? "wrap-out" : "wrap-out current"}>
      <Link to={'./' + parentCol + '/'+ docData.id} className="wrap-in">
        {
          docData.images && 
          <div className="image-container"
            style={{backgroundImage: "url('" + docData.images
              .find(image => image.placing === 'thumbnail').url || defaultImage + "')"}}></div>
        }
        <div className="text">
            <p>{docData.title}</p>
            {primaryLang && <LangIndicator primaryLang={docData.primaryLanguage}/>}
        </div>
      </Link>
    </li> 
  );
}

DocCard.propTypes = {
  docData: propTypes.object.isRequired,
  parentCol: propTypes.string.isRequired
}

export default DocCard;