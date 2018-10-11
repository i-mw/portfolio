import React from 'react';
import propTypes from 'prop-types';
import LangIndicator from './LangIndicator'

function Headline(props) {
  return (
    <div className="wrap-out headline">
      <div className="wrap-in">
        <h1>{props.headline}</h1>
        {
          props.primaryLang && <LangIndicator primaryLang={props.primaryLang}/>
        }
        {
          props.headlinePoints && (
              props.headlinePoints[0].content.map(
                (point, index) => <p key={index}>{point.i}</p>
              )
          )
        }
    </div>
</div>
  );
}

Headline.propTypes = {
  headline: propTypes.string.isRequired,
  headlinePoints: propTypes.array,
  primaryLang: propTypes.string
}

export default Headline;