import React from 'react';
import core from './core/Core';
const Page04 = () => {
    return (
        <div className="view-vv">
            Page04
            <button onClick={()=>{
                core.resetPage(['Home']);
                // core.gotoBack(-3);
            }}>goHome</button>
             <button onClick={()=>{
                core.insertPage('Page01');
            }}>goNext</button>
        </div>
    );
};

export default Page04;