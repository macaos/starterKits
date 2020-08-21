

/**
 * use
 * import EventEmitter, {Event} from "common/events/EventEmitter";
 *
 * dispatch
 * EventEmitter.dispatch(Event.EVENT_EXAMPLE, {같이 넘길 파라메터 });
 *
 * subscribe
 * EventEmitter.subscribe(Event.EVENT_EXAMPLE, (options:any)=>{
 *  {같이 넘길 파라메터 }
 * });
 */
export class Event{
	// public static CHANGE_HISTORY: string = "changeHistory";
	// public static CHANGE_BROWSER_HISTORY: string = "changeBrowserHistory";
	// public static CHANGE_POPUP_STATE: string = "changePopupState";
	// public static CHANGE_TRANSITION_END: string = "changeTransitionEnd";
	// public static DEBUG_SHOW_EDITOR: string = "debugShowEditor";
	// public static GET_VALUE: string = "getValue";
	// public static SET_VALUE: string = "setValue";
	// public static START_RUN: string = "startRun";
	// public static END_RUN: string = "endRun";
	// public static SHOW_ALERT: string = "showAlert";
	// public static CHANGE_CALENDAR_DATE: string = "changeCalendarDate";
    // public static CHANGE_CALENDAR_DATE: string = "changeCalendarDate";
    public static INSERT_PAGE: string = "insertPage";
    public static GOTO_BACK: string = "gotoBack";
    public static RESET_PAGE: string = "resetPage";
    public static SHOW_ALERT: string = "showAlert";
    public static HIDE_ALERT: string = "hideAlert";

	constructor(){
	}

	public events: any = {};
	public dispatch(event: string, data?: any): void {
		if (!this.events[event]) return;
		this.events[event].forEach((callback: (arg0: any) => void) =>
			callback(data)
		);
	}
	public subscribe(event: string, callback: any): void {
		if (!this.events[event]) this.events[event] = [];
		this.events[event].push(callback);
	}
	public remove(event: string): void {
		if (this.events[event]) this.events[event] = null;
	}
}

export default new Event();
