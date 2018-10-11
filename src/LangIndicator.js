import React from 'react';
import propTypes from 'prop-types';

function LangIndicator(props) {
  return (
    <div className={"lang-indicator " + props.primaryLanguage}
      title={ props.primaryLanguage + " is the primary language in this project"}></div>
  );
}

LangIndicator.propTypes = {
  primaryLanguage: propTypes.string.isRequired
}

export default LangIndicator;