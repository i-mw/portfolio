import React from 'react';
import propTypes from 'prop-types';
import Summary from './Summary';

function Jumbo(props) {
  const {jumboImage, summary, colType} = props;

  const retrievedImage = jumboImage && jumboImage.url;
  let defaultImage = '';

  if (colType === 'skills') {
    defaultImage = 'https://firebasestorage.googleapis.com/v0/b/' +
    'portfolio-v2-9ca05.appspot.com/o/placeholders%2Fplaceholder-x*150.png?' +
    'alt=media&token=817aac95-22c5-449a-95d0-8eb1f5837f9c';
  } else {
    defaultImage = 'https://firebasestorage.googleapis.com/v0/b/' +
    'portfolio-v2-9ca05.appspot.com/o/placeholders%2Fplaceholder-666*251.png?' +
    'alt=media&token=bdcdbf3d-ffcb-414f-8b08-91b2645ede77';
  }


  const image = retrievedImage || defaultImage;

  return (
    <section className="wrap-out jumbotron">
      <div className="wrap-in">
        <div className="screenshot">
          <a tabIndex="-1" href={image}
            style={{backgroundImage: "url(" + image + ")"}}
            target="_blank" title="jumbo image">jumbo image</a>
        </div>
        {summary && <Summary summaryContent={summary[0].content}/>}
      </div>
    </section>
  );
}

Jumbo.propTypes = {
  jumboImage: propTypes.object.isRequired,
  summary: propTypes.array,
  colType: propTypes.string.isRequired
}

export default Jumbo;