import React from 'react';
import propTypes from 'prop-types';
import LangIndicator from './LangIndicator'
import Summary from './Summary'

function Headline(props) {
  return (
    <div className="wrap-out headline">
      <div className="wrap-in">
        <h1 dangerouslySetInnerHTML={{__html: props.headline}}></h1>
        {
          props.primaryLang && <LangIndicator primaryLang={props.primaryLang}
            colType={props.colType}/>
        }
        {
          props.headlinePoints && (
            <Summary summaryContent={props.headlinePoints[0].content}/>
          )
        }
    </div>
</div>
  );
}

Headline.propTypes = {
  headline: propTypes.string.isRequired,
  headlinePoints: propTypes.array,
  primaryLang: propTypes.string,
  colType: propTypes.string.isRequired
}

export default Headline;