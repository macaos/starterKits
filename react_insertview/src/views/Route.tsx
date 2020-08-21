import classnames from 'classnames';
import { css } from 'emotion';
import React, { Component } from 'react';
import Alert from './Alert';
import EventEmitter, { Event } from './core/EventEmitter';
import Home from './Home';
import Page01 from './Page01';
import Page02 from './Page02';
import Page03 from './Page03';
import Page04 from './Page04';

class Route extends Component<{},{
    showPages:string[]
}> {
    state = {
        showPages:['Home']
    }
    screenWidth = (window as any).screen.width;
    constructor(props:{}){
        super(props);
        console.log('이건 한번?Route');
        EventEmitter.subscribe(Event.INSERT_PAGE,(options:any)=>{
            console.log('showPagess',this.state.showPages);
            let newArr:string[] = JSON.parse(JSON.stringify(this.state.showPages));//showPages => [...showPages];
            newArr.push(options.pageID as string);
            console.log('newArr',newArr)
            // setShowPages(newArr)
            this.setState({
                ...this.state,
                showPages: newArr,
            })
        })
        EventEmitter.subscribe(Event.GOTO_BACK,(options:any)=>{
            console.log('showPagessd',this.state.showPages);
            // return;
            let newArr:string[] = this.state.showPages.slice(0, this.state.showPages.length+options.idx);
            console.log('newArr',newArr)
            this.setState({
                ...this.state,
                showPages: newArr,
            })
        })
        EventEmitter.subscribe(Event.RESET_PAGE,(options:any)=>{
            let newArr:string[] = options.arr;
            console.log('newArr',newArr)
            this.setState({
                ...this.state,
                showPages: newArr,
            })
        })
        EventEmitter.subscribe(Event.RESET_PAGE,(options:any)=>{
            let newArr:string[] = options.arr;
            console.log('newArr',newArr)
            this.setState({
                ...this.state,
                showPages: newArr,
            })
        })
    }
    render() {
        const {showPages} = this.state;
        const Pages = showPages.map((name:string)=>{
            switch(name) {
                case 'Home':
                    return <Home key="Home"/>;
                    break;
                case 'Page01':
                    return <Page01 key="Page01"/>;
                    break;
                case 'Page02':
                    return <Page02 key="Page02"/>;
                    break;
                case 'Page03':
                    return <Page03 key="Page03"/>;
                    break;
                case 'Page04':
                    return <Page04 key="Page04"/>;
                    break;
            }
            return
        })
        return (
            <div>
                <Alert />
                <div className={classnames(["page-container",css`
                    width: ${this.screenWidth*showPages.length+50}px;
                    margin-left: ${this.screenWidth*(showPages.length-1)*-1}px;
                `])}>

                    {Pages}
                </div>
            </div>
        );
    }
}

export default Route;

