import React from 'react';
import Core from '../comm/Core';

const BasicModal = () => {
    const info = {
        name: 'BasicModal',
    }
    return (
        <div>
            BasicModal
            <button onClick={() => {
                Core.view.hideModal(info.name)
            }}>닫기</button>
        </div>
    );
};

export default BasicModal;