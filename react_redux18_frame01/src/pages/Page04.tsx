import React from 'react';
import Core from '../comm/Core';

const Page04 = () => {
    return (
        <div>
            Page04
            <button onClick={() => {
                Core.view.showPage('Elements');
            }}>다음</button>
        </div>
    );
};

export default Page04;