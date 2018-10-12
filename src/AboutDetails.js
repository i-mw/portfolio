import React from 'react';
import propTypes from 'prop-types';
import AboutSection from './AboutSection.js'

function AboutDetails(props) {
  return (
    <ul>
      {props.details.map((sectionContent, index) => {
        return <AboutSection key={index} sectionContent={sectionContent}/>
      })}
    </ul>
  );
}

AboutDetails.propTypes = {
  details: propTypes.array.isRequired
}

export default AboutDetails;