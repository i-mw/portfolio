import React from 'react';
import propTypes from 'prop-types';

function LangIndicator(props) {
  const {primaryLang, colType} = props;

  return (
    <div className={"lang-indicator " + primaryLang}
      title={primaryLang + " is the primary language in this " +
      colType.slice(0, colType.length-1)}></div>
  );
}

LangIndicator.propTypes = {
  primaryLang: propTypes.string.isRequired,
  colType: propTypes.string.isRequired
}

export default LangIndicator;