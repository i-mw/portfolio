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
                                      left: "calc(50% - 26px)"}}>
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

InternalLoading.propTypes = {

}

export default InternalLoading;