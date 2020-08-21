import React, { Component } from 'react';
import AlertBasic from './component/AlertBasic';
import EventEmitter, { Event } from './core/EventEmitter';

class Alert extends Component {
    state = {
        moduleName:''
    }
    constructor(props:{}){
        super(props);
        EventEmitter.subscribe(Event.SHOW_ALERT,(options:any)=>{
           this.setState({
               ...this.state,
               moduleName: options.moduleName
           });
        });
        EventEmitter.subscribe(Event.HIDE_ALERT,(options:any)=>{
            this.setState({
                ...this.state,
                moduleName: ''
            });
         });
    }
    render() {

        const AlertModule = (()=>{

            switch(this.state.moduleName) {
                case 'AlertBasic':

                    return <AlertBasic key="AlertBasic"/>;
                    break;

            }
        })();

        return (
            <>
                {
                    this.state.moduleName !== '' && <div className="view-Alert">
                        {AlertModule}
                    </div>
                }
            </>
        );
    }
}

export default Alert;