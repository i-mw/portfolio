import React from 'react';
import propTypes from 'prop-types';
import Headline from './Headline';
import GoToParent from './GoToParent';
import Logo from './Logo';
import PersonalPhoto from './PersonalPhoto';

function Header(props) {
  const {
    headline,
    headlinePoints,
    primaryLang,
    parentCollection,
    logoText,
    logoImage,
    personalImage,
    type
  } = props;
  
  return (
    /* type is equal to one of these: about, collection, doc, not-found */
    <header className={type}>
      <div className="container">
        {parentCollection && <GoToParent parentCollection={parentCollection}/>}
        {logoImage && <Logo image={logoImage} logoText={logoText}/>}
        {personalImage && <PersonalPhoto image={personalImage}/>}
        <Headline headline={headline} headlinePoints={headlinePoints}
          primaryLang={primaryLang} colType={parentCollection}/>
      </div>
    </header>
  );
}

Header.propTypes = {
  type: propTypes.string.isRequired,
  headline: propTypes.string.isRequired,
  headlinePoints: propTypes.array,
  primaryLang: propTypes.string,
  parentCollection: propTypes.string,
  logoText: propTypes.string,
  personalImage: propTypes.object
}

export default Header;