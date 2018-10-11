import React from 'react';
import propTypes from 'prop-types';
import Headline from './Headline';
import GoToParent from './GoToParent';
import Logo from './Logo';

function Header(props) {
  const {
    headline,
    headlinePoints,
    primaryLang,
    parentCollection,
    logoText
  } = props;
  return (
    <header className={''}>
      <div className="container">
        {parentCollection && <GoToParent parentCollection={parentCollection}/>}
        {logoText && <Logo logoText={logoText}/>}
        <Headline headline={headline} headlinePoints={headlinePoints}
          primaryLang={primaryLang}/>
      </div>
    </header>
  );
}

Header.propTypes = {
  headline: propTypes.string.isRequired,
  headlinePoints: propTypes.array,
  primaryLang: propTypes.string,
  parentCollection: propTypes.string,
  logoText: propTypes.string
}

export default Header;