import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../store';

const LoadingManager = () => {

    const { showLoading } = useSelector((state: RootStateType) => ({
        showLoading: state.view.showLoading,
    }));

    return (
        <div className={classNames(["loading-manager", { show: showLoading }])}>

        </div>
    );
};

export default LoadingManager;