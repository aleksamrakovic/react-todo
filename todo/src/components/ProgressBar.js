import React from 'react';

const ProgressBar = ({progress}) => {

    return (
        <div className="progress">
            <div 
                className="progress-bar" 
                role="progressbar" 
                style={{width: progress}} 
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
            >
                {progress.substring(0,5)}%
            </div>
        </div>
    );
};

export default ProgressBar;
