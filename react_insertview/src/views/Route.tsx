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

const StartPageID: string = 'Home';
class Route extends Component<{}, {
    showPages: string[]
}> {
    state = {
        showPages: [StartPageID]
    }
    // screenWidth = (window as any).screen.width;
    screenWidth = document.documentElement.offsetWidth;
    constructor(props: {}) {
        super(props);
        console.log('이건 한번?Route');
        EventEmitter.subscribe(Event.INSERT_PAGE, (options: any) => {
            // 빈값인 경우 제일 처음으로 초기화 
            if (options.pageID === '') {
                this.setState({
                    ...this.state,
                    showPages: [StartPageID],
                });
                return;
            }
            const pageID = options.pageID as string;
            let newArr: string[] = JSON.parse(JSON.stringify(this.state.showPages));//showPages => [...showPages];
            let unmountObject = '';
            // 동일 페이지가 존재하는 경우 필터링 
            newArr = newArr.filter((item: string) => {
                if (item === pageID) {
                    // need unmount
                    unmountObject = item;
                }
                return item !== pageID;
            })
            // unmount해야할 대상이 있는경우 
            if (unmountObject !== '') {
                this.setState({
                    ...this.state,
                    showPages: newArr,
                })
            }

            setTimeout(() => {
                newArr.push(pageID);
                this.setState({
                    ...this.state,
                    showPages: newArr,
                })
            });
        })
        EventEmitter.subscribe(Event.GOTO_BACK, (options: any) => {
            console.log('showPagessd', this.state.showPages);
            // return;
            let newArr: string[] = this.state.showPages.slice(0, this.state.showPages.length + options.idx);
            if (newArr.length === 0) return;
            console.log('newArr', newArr)
            this.setState({
                ...this.state,
                showPages: newArr,
            })
        })
        EventEmitter.subscribe(Event.RESET_PAGE, (options: any) => {
            let newArr: string[] = options.arr;
            console.log('newArr', newArr)
            this.setState({
                ...this.state,
                showPages: newArr,
            })
        })
    }
    render() {
        const { showPages } = this.state;
        const Pages = showPages.map((name: string) => {
            switch (name) {
                case 'Home':
                    return <Home key="Home" />;
                    break;
                case 'Page01':
                    return <Page01 key="Page01" />;
                    break;
                case 'Page02':
                    return <Page02 key="Page02" />;
                    break;
                case 'Page03':
                    return <Page03 key="Page03" />;
                    break;
                case 'Page04':
                    return <Page04 key="Page04" />;
                    break;
            }
            return
        })
        this.screenWidth = document.documentElement.offsetWidth;
        return (
            <div>
                <Alert />
                <div className={classnames(["page-container", css`
                    width: ${this.screenWidth * showPages.length + 50}px;
                    margin-left: ${this.screenWidth * (showPages.length - 1) * -1}px;
                `])}>

                    {Pages}
                </div>
            </div>
        );
    }
}

export default Route;

