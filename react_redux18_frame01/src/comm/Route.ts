import Core from "./Core";

class Route {

    constructor() {
        this.addEvents();
    }

    public history: History = window.history;
    // public historyStartLen: number = this.history.length;
    public pushStateArr: {
        type: string,
        name: string,
        param: any,
    }[] = [];

    addEvents() {
        // Core.win.addEventListener('popstate', (e: PopStateEvent) => {
        //     console.log(e);
        // })
        // console.log('addEvent')
        window.addEventListener('popstate', (event: PopStateEvent) => {
            console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
            if (event.state.type === "page") {

            } else if (event.state.type === "modal") {

            }
            // Core.view.pageSwitch(event.state.page);
        });
    }

    /**
     * 페이지 전환 
     * @param name 페이지 이름 
     * @param dir 이동 방향
     */
    showPage(name: string, dir: 'next' | 'prev' = 'next') {
        console.log('showPage: ', name, dir)
        this.history.replaceState({ page: name, type: 'page' }, name, `?page=${name}`);
        // Core.view.pageSwitch(name, dir);
    }
}

export default new Route();