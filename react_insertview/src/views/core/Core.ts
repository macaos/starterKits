import EventEmitter, { Event } from './EventEmitter';

class Core{
	constructor(){

    }

    insertPage(pageID:string){
        EventEmitter.dispatch(Event.INSERT_PAGE, {
            pageID: pageID
        });
    }
    gotoBack(idx:number){
        EventEmitter.dispatch(Event.GOTO_BACK, {
            idx: idx
        });
    }
    resetPage(arr:string[]){
        EventEmitter.dispatch(Event.RESET_PAGE, {
            arr: arr
        });
    }
    showAlert(message:string){
        EventEmitter.dispatch(Event.SHOW_ALERT, {
            moduleName: 'AlertBasic',
            message: message,
        });
    }
    showAlertModule(moduleName:string){
        EventEmitter.dispatch(Event.SHOW_ALERT, {
            moduleName: moduleName
        });
    }
    hideAlert(){
        EventEmitter.dispatch(Event.HIDE_ALERT, {});
    }


}

export default new Core();