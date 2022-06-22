import React, { useEffect } from 'react';
import Core from './comm/Core';
import Counter from './example/Counter';
import Elements from './pages/Elements';
import "./sass/Main.scss"

const Main = () => {
    useEffect(() => {
        Core.view.showPage('Page01')
    }, []);
    return (
        <div>
            {/* <Counter /> */}
            <Elements />
        </div>
    );
};

export default Main;