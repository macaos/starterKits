import React, { useEffect } from 'react';
import Core from './comm/Core';
import PageManager from './comm/PageManager';
import Counter from './example/Counter';
import Elements from './pages/Elements';
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
            <PageManager />
        </>
    );
};

export default Main;