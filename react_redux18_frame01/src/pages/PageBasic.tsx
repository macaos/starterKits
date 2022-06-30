import React from 'react';
import Core from '../comm/Core';

const PageBasic = () => {
    return (
        <div>
            PageBasic
            <button onClick={() => {
                Core.view.showPage('Page02');
            }}>다음</button>
        </div>
    );
};

export default PageBasic;