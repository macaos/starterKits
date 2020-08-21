import React from 'react';
import core from '../core/Core';
const AlertBasic = () => {
    return (
        <div>
            AlertBasic
            <button onClick={()=>{
                core.hideAlert();
            }}>close</button>
        </div>
    );
};

export default AlertBasic;