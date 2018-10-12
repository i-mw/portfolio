import React from 'react';
import propTypes from 'prop-types';
import Summary from './Summary';

function Jumbo(props) {
  const {jumboImage, summary} = props;
  return (
    <section className="wrap-out jumbotron">
      <div className="wrap-in">
        <div className="screenshot">
          <a tabIndex="-1" href={jumboImage.url}
            style={{backgroundImage: "url(" + jumboImage.url + ")"}}
            target="_blank" title="jumbo image">jumbo image</a>
        </div>
        <Summary summaryContent={summary[0].content}/>
      </div>
    </section>
  );
}

Jumbo.propTypes = {
  jumboImage: propTypes.object.isRequired,
  summary: propTypes.array.isRequired
}

export default Jumbo;