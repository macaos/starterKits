import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Hamburger from '../components/Hamburger';
import GNB from './GNB';
import Header from './Header';
import Page01 from './Page01';
import Page02 from './Page02';
import Page03 from './Page03';
import PageProtoAuthUI from './PageProtoAuthUI';
// import PageCSSHamburger from './PageCSSHamburger';
import PageHome from './PageHome';

const PageRoute = () => {

    useEffect(() => {

    }, []);

    return (
        <div>
            <Route path="/" component={Header} />
            <Route path="/" component={GNB} />
            <Hamburger />
            <div className="page-group">
                <div className="page-group-in">
                    <Route exact path="/" component={PageHome} />
                    <Route path="/Page01" component={Page01} />
                    <Route path="/Page02" component={Page02} />
                    <Route path="/Page03" component={Page03} />
                    <Route path="/PageProtoAuthUI" component={PageProtoAuthUI} />
                    {/* <Route path="/PageCSSHamburger" component={PageCSSHamburger} /> */}
                </div>
            </div>

        </div>
    );
};

export default PageRoute;