import React from 'react';
import propTypes from 'prop-types';

/* This component and icon is absolutely designed and aligned
   And corresponds to loading a whole page, not an element in a page
   - for an element in page check InternalLoading component
*/

function ExternalLoading(props) {
  return (
    <div className="wrap-out" style={{display: "inline-block", position: "absolute",
      zIndex: 1, top: "calc(50% - 12px)", left: "calc(50% - 26px)"}}>
      <div className="wrap-in" style={{border: 0, padding: 0}}>
        <div className="loading" style={{width: "52px", height: "12px"}}>
          <div className="ld ld-blink"
               style={{width: "12px", height: "12px",
                       backgroundColor: "rgb(67, 84, 114)", float: "left",
                       marginRight: "8px", animationDelay: "-0.7s",
                       animationDuration: "2s", animationDirection: "normal"}}></div>
          <div className="ld ld-blink"
               style={{width: "12px", height: "12px",
               backgroundColor: "rgb(67, 84, 114)", float: "left",
               marginRight: "8px", animationDelay: "-0.35s",
               animationDuration: "2s", animationDirection: "normal"}}></div>
          <div className="ld ld-blink"
               style={{width: "12px", height: "12px",
               backgroundColor: "rgb(67, 84, 114)", float: "left",
               marginRight: "0", animationDelay: "0s",
               animationDuration: "2s", animationDirection: "normal"}}></div>
        </div>
      </div>
    </div>
  )
}

ExternalLoading.propTypes = {

}

export default ExternalLoading;