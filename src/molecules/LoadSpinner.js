import React from 'react';
import loadSpinner from '../images/Ellipsis-2s-200px.gif'

const LoadSpinner = props => {
    return (
        <div>
            <img src={loadSpinner} {...props} alt="spinner" />
        </div>
    )
}

export default LoadSpinner;