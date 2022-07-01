import React from 'react';
import Core from '../comm/Core';

const Header = () => {
    return (
        <header className="header">
            <button onClick={() => {
                Core.view.showPage('prev');
            }}>뒤로</button>
            <div className="logo">Header</div>
        </header>
    );
};

export default Header;