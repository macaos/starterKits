import React from 'react';
import core from './core/Core';
const Page03 = () => {
    return (
        <div className="view-vv">
            Page03
            <button onClick={()=>{
                core.gotoBack(-1);
            }}>goBack</button>
             <button onClick={()=>{
                core.insertPage('Page04');
            }}>goNext</button>
        </div>
    );
};

export default Page03;