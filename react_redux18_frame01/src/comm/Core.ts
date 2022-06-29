
import { Store } from "redux";
import Route from "./Route";
import View from "./View";

class Core {
    private _store!: Store;

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
    get store() {
        return this._store;
    }
    set store(inStore: Store) {
        this._store = inStore;
    }
}

export default new Core();