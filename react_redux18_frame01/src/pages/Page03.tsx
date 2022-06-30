import React from 'react';
import Core from '../comm/Core';

const Page03 = () => {
    return (
        <div>
            Page03
            <button onClick={() => {
                Core.view.showPage('Page04');
            }}>다음</button>
        </div>
    );
};

export default Page03;