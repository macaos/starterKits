import classnames from 'classnames';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isShowgnbState, isShowhamburgerState } from '../core/store';

const GNB = () => {
    const [isShowgnb, setisShowgnb] = useRecoilState(isShowgnbState);
    const setisShowhamburger = useSetRecoilState(isShowhamburgerState);
    const hideGNB = () => {
        setisShowgnb(false);
        // setisShowhamburger(false);
    }
    useEffect(() => {
        (window as any).addEventListener("zz-media-query", (e: any) => {
            // console.log('resize',e)

            if (e.detail > 480) {
                setisShowgnb(true);
            } else {
                setisShowgnb(false);
            }
        });
    }, []);
    return (
        <div className={classnames(["GNB utils-layout-left20", { isShow: isShowgnb }])}>
            <div className="GNB-in">
                <NavLink onClick={() => {
                    hideGNB();
                }} className="btn-leftitem" to="/">Home</NavLink>
                <NavLink onClick={() => {
                    hideGNB();
                }} className="btn-leftitem" to="/Page01">Page01</NavLink>
                <NavLink onClick={() => {
                    hideGNB();
                }} className="btn-leftitem" to="/Page02">Page02</NavLink>
                <NavLink onClick={() => {
                    hideGNB();
                }} className="btn-leftitem" to="/Page03">Page03</NavLink>
                <NavLink onClick={() => {
                    hideGNB();
                }} className="btn-leftitem" to="/PageProtoAuthUI">PageProtoAuthUI</NavLink>
                <NavLink onClick={() => {
                    hideGNB();
                }} className="btn-leftitem" to="/PageCSSHamburger">PageCSSHamburger</NavLink>
            </div>
        </div>
    );
};

export default GNB;