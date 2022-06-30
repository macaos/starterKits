import React from 'react';
import Core from '../comm/Core';

const Page02 = () => {
    return (
        <div>
            Page02
            <button onClick={() => {
                Core.view.showPage('Page03');
            }}>다음</button>
        </div>
    );
};

export default Page02;