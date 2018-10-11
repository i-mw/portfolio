import React from 'react';
import propTypes from 'prop-types';
import Headline from './Headline';

function Header(props) {
  const {headline, headlinePoints, primaryLang} = props;
  return (
    <header className={''}>
      <div className="container">
        <Headline headline={headline} headlinePoints={headlinePoints}
          primaryLang={primaryLang}/>
      </div>
    </header>
  );
}

Header.propTypes = {
  headline: propTypes.string.isRequired,
  headlinePoints: propTypes.array,
  primaryLang: propTypes.string
}

export default Header;