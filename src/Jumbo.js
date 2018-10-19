import React from 'react';
import propTypes from 'prop-types';
import Summary from './Summary';

function Jumbo(props) {
  const {jumboImage, summary} = props;

  const retrievedImage = jumboImage && jumboImage.url;
  const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/' + 
    'portfolio-v2-9ca05.appspot.com/o/placeholder.png?' +
    'alt=media&token=97415612-b965-4f82-b608-adf77e574707';
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
  summary: propTypes.array
}

export default Jumbo;