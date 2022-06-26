
import Route from "./Route";
import View from "./View";

class Core {
    get view() {
        return View;
    }
    get route() {
        return Route;
    }
    get win() {
        return window as any;
    }
    get doc() {
        return document as any;
    }
}

export default new Core();