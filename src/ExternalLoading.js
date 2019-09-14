import React from 'react';
import propTypes from 'prop-types';

/* This component and icon is absolutely designed and aligned
   And corresponds to loading a whole page, not an element in a page
   - for an element in page check InternalLoading component
*/

function ExternalLoading(props) {
  return (
    <div className="wrap-out" style={{display: "inline-block", position: "absolute",
      zIndex: 1, top: "calc(50% - 35px)", left: "calc(50% - 35px)"}}>
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

ExternalLoading.propTypes = {

}

export default ExternalLoading;