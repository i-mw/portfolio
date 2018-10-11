import React from 'react';
import propTypes from 'prop-types';

function LangIndicator(props) {
  return (
    <div className={"lang-indicator " + props.primaryLang}
      title={ props.primaryLang + " is the primary language in this project"}></div>
  );
}

LangIndicator.propTypes = {
  primaryLang: propTypes.string.isRequired
}

export default LangIndicator;