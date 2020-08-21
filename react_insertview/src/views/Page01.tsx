import React from 'react';
import core from './core/Core';

const Page01 = () => {
    return (
        <div className="view-vv">
            Page01
            <button onClick={()=>{
                core.gotoBack(-1);
            }}>goBack</button>
             <button onClick={()=>{
                core.insertPage('Page02');
            }}>goNext</button>

<button onClick={()=>{
                core.showAlert('AlertBasic');
            }}>alert</button>
        </div>
    );
};

export default Page01;