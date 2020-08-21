import React from 'react';
import core from './core/Core';
const Page02 = () => {
    return (
        <div className="view-vv">
            Page02
            <button onClick={()=>{
                core.gotoBack(-1);
            }}>goBack</button>
             <button onClick={()=>{
                core.insertPage('Page03');
            }}>goNext</button>
        </div>
    );
};

export default Page02;