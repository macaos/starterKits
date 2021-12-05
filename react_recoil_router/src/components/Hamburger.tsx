import React, { useEffect } from 'react';
import {
    useRecoilState
} from "recoil";
import { isShowgnbState, isShowhamburgerState } from '../core/store';

const Hamburger = () => {
    const [isShowhamburger, setisShowhamburger] = useRecoilState(isShowhamburgerState);
    const [isShowgnb, setisShowgnb] = useRecoilState(isShowgnbState);
    const resizeToGnbstate = () => {
        setisShowgnb(false);
    }
    useEffect(() => {
        (window as any).addEventListener("zz-media-query", (e: any) => {

            if (e.detail > 480) {
                setisShowhamburger(false);
            } else {
                setisShowhamburger(true);
            }
        });
    }, []);
    return (
        <>
            {isShowhamburger && <div className="hamburger-me">
                <input type="checkbox" checked={isShowgnb} onChange={() => {
                    setisShowgnb(!isShowgnb);
                    console.log('tempaaa')
                }}></input>
                <span></span>
                <span></span>
                <span></span>
            </div>}
        </>

    );
};

export default Hamburger;