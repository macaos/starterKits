import React from 'react';
import Core from '../comm/Core';

const Page01 = () => {
    return (
        <div>
            Page01
            <button onClick={() => {
                Core.view.showPage('Page02');
            }}>다음</button>
        </div>
    );
};

export default Page01;