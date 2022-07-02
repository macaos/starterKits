import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../store';
import Core from './Core';

const AlertManager = () => {

    const { showAlert } = useSelector((state: RootStateType) => ({
        showAlert: state.view.showAlert,
    }));

    if (!showAlert) {
        return <></>
    }

    return (
        <div className="alert-manager">
            {showAlert.message}
            <button onClick={() => {
                Core.view.hideAlert();
            }}>확인</button>
        </div>
    );
};

export default AlertManager;