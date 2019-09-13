import React from 'react';
import propTypes from 'prop-types';
import loadingIcon from './loading.svg'

/* This component and icon is absolutely designed and aligned
   And corresponds to loading a whole page, not an element in a page
   - for an element in page check InternalLoading component
*/

function ExternalLoading(props) {
  return (
    <div className="wrap-out" style={{display: "inline-block", position: "absolute",
      zIndex: 1, top: "calc(50% - 35px)", left: "calc(50% - 35px)"}}>
      <div className="wrap-in" style={{border: 0, padding: 0}}>
        <img src={loadingIcon} alt="loading icon" style={{width: "70px"}}/>
      </div>
    </div>
  )
}

ExternalLoading.propTypes = {

}

export default ExternalLoading;