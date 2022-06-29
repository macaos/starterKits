import React, { useEffect } from 'react';
import AlertManager from './comm/AlertManager';
import Core from './comm/Core';
import LoadingManager from './comm/LoadingManager';
import ModalManager from './comm/ModalManager';
import PageManager from './comm/PageManager';
import Counter from './example/Counter';
import Header from './pages/Header';
import "./sass/Main.scss"

const Main = () => {
    useEffect(() => {
        Core.view.showPage('Elements')
    }, []);
    return (
        <>
            <Header />
            {/* <Counter /> */}
            {/* <Elements /> */}
            <LoadingManager />
            <AlertManager />
            <ModalManager />
            <PageManager />
        </>
    );
};

export default Main;