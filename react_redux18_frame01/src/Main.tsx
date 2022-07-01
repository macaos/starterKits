import React, { useEffect } from 'react';
import AlertManager from './comm/AlertManager';
import Core from './comm/Core';
import LoadingManager from './comm/LoadingManager';
import ModalManager from './comm/ModalManager';
import PageManager from './comm/PageManager';
import Counter from './example/Counter';
import Header from './pages/Header';
import qs from 'query-string';
import "./sass/Main.scss"
import DocsMain from './docs/DocsMain';

const Main = () => {

    const parsed = qs.parse(window.location.search);

    useEffect(() => {
        if (parsed!.page !== 'doc') {
            Core.view.showPage('PageUser01');
        }

    }, []);

    if (parsed!.page === 'doc') {
        return <DocsMain />
    }

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