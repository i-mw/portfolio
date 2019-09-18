import React from 'react';
import propTypes from 'prop-types';
import LangIndicator from './LangIndicator';
import {Link} from 'react-router-dom'

function DocCard(props) {
  const {docData, colType} = props;
  const retrievedImage = docData.images && docData.images.find(image => image.placing === 'thumbnail').url;
  let defaultImage = '';

  if (colType === 'skills') {
    defaultImage = 'https://firebasestorage.googleapis.com/v0/b/' + 
      'portfolio-v2-9ca05.appspot.com/o/placeholders%2Fplaceholder-60.png?' + 
      'alt=media&token=0bf1052d-f2af-4aad-ae73-c34c79da3130'
  } else {
    defaultImage = 'https://firebasestorage.googleapis.com/v0/b/' +
      'portfolio-v2-9ca05.appspot.com/o/placeholders%2Fplaceholder-370*207.png?' +
      'alt=media&token=930f87d8-974d-4d48-8012-c457f7a4afeb'
  }

  const image = retrievedImage || defaultImage;
  if (docData.id === 'main') {
    return ''
  }

  return (
    <li className={colType === 'skills' ? 'wrap-out' : docData.dates.endedAt ? "wrap-out" : "wrap-out current"}>
      <Link to={'/' + colType + '/'+ docData.id} className="wrap-in">
        {
          docData.images && 
          <div className="image-container"
            style={{backgroundImage: "url('" + image + "')"}}></div>
        }
        <div className="text">
            <p>{docData.title}</p>
            {docData.primaryLanguage && <LangIndicator
              primaryLang={docData.primaryLanguage} colType={colType}/>}
        </div>
      </Link>
    </li> 
  );
}

DocCard.propTypes = {
  docData: propTypes.object.isRequired,
  colType: propTypes.string.isRequired
}

export default DocCard;