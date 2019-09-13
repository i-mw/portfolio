import React from 'react';
import propTypes from 'prop-types';
import loadingIcon from './loading.svg'

/* This loading component and icon is floating after content
   And corresponds to loading parts or elements in a page, 
   not a whole page.
   -for whole page loading icon, check ExternalLoading component */
function InternalLoading(props) {
  return (
    <div className="wrap-out" style={{display: "inline-block", 
                                      marginTop: "70px",
                                      marginBottom: "100px",
                                      left: "calc(50% - 35px)"}}>
      <div className="wrap-in" style={{border: 0, padding: 0}}>
        <img src={loadingIcon} alt="loading icon" style={{width: "70px"}}/>
      </div>
    </div>
  )
}

InternalLoading.propTypes = {

}

export default InternalLoading;