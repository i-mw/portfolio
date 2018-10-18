import React from 'react';
import propTypes from 'prop-types';
import loadingIcon from './loading.svg'

function Loading(props) {
  return (
    <div className="wrap-out" style={{display: "inline-block", position: "absolute",
      zIndex: 1, top: "calc(50% - 35px)", left: "calc(50% - 35px)"}}>
      <div className="wrap-in" style={{border: 0, padding: 0}}>
        <img src={loadingIcon} alt="loading icon" style={{width: "70px"}}/>
      </div>
    </div>
  )
}

Loading.propTypes = {

}

export default Loading;