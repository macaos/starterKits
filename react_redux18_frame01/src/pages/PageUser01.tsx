import React from 'react';
import Core from '../comm/Core';

const PageUser01 = () => {
    return (
        <div>
            <div>
                <button onClick={() => {
                    Core.view.showModal('BasicModal')
                }}>모달</button>
                <button>bottomSheet</button>
                <button>alert</button>
            </div>
            <div>
                서비스 간단 소개
            </div>
            <button onClick={() => {
                Core.view.showPage('Page02');
            }}>다음</button>
        </div>
    );
};

export default PageUser01;