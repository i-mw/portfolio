import React from 'react';
import propTypes from 'prop-types';

/* This loading component and icon is floating after content
   And corresponds to loading parts or elements in a page, 
   not a whole page.
   -for whole page loading icon, check ExternalLoading component */
function InternalLoading(props) {
  return (
    <div className="wrap-out" style={{display: "inline-block", 
                                      marginTop: "60px",
                                      marginBottom: "100px",
                                      left: "calc(50% - 35px)"}}>
      <div className="wrap-in" style={{border: 0, padding: 0}}>
        <svg className="prefix__ldt-blank" width={70} height={19}
            preserveAspectRatio="xMidYMid" style={{background: '0 0'}} {...props}>
          <text fill="#435472" transform="translate(0 19)"
                fontSize={32} className="ld ld-blink"
                style={{animationDelay: "-0.7s", animationDuration: "2s",
                        animationDirection: "normal",
                        transformOrigin: "16.9062px 0px 0px"}}>
            {'\u25A0'}
          </text>
          <text fill="#435472" transform="translate(25 19)"
                fontSize={32} className="ld ld-blink"
                style={{animationDelay: "-0.35s", animationDuration: "2s",
                animationDirection: "normal",
                transformOrigin: "16.9062px 0px 0px"}}>
            {'\u25A0'}
          </text>
          <text fill="#435472" transform="translate(51 19)"
                fontSize={32} className="ld ld-blink"
                style={{animationDelay: "0s", animationDuration: "2s",
                animationDirection: "normal",
                transformOrigin: "16.9062px 0px 0px"}}>
            {'\u25A0'}
          </text>
        </svg>
      </div>
    </div>
  )
}

InternalLoading.propTypes = {

}

export default InternalLoading;