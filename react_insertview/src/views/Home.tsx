import React, { useEffect } from 'react';
import core from './core/Core';

const Home = () => {
    useEffect(()=>{
        console.log('이건 한번?HOME');
    },[]);
    return (
        <div className="view-vv">
            Home
            <button onClick={()=>{
                core.insertPage('Page01');
            }}>Page01</button>
            <button onClick={()=>{
                core.insertPage('Page02');
            }}>Page02</button>
            <button onClick={()=>{
                core.insertPage('Page03');
            }}>Page03</button>
            <button onClick={()=>{
                core.insertPage('Page04');
            }}>Page04</button>
        </div>
    );
};

export default Home;