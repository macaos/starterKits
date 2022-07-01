import { hideLoading, showLoading, showPage } from "../store/view";
import Core from "./Core";

type showPageNameType = string | 'next' | 'prev' | '';

class View {

    public pageContainerToggle: number = 0;
    public CacheCompPage1: any;
    public CacheCompPage2: any;
    public lastCheckPageDir: showPageNameType = 'next';
    private pageStack: string[] = [];

    /**
     * 페이지 전환 
     * @param name 페이지 이름 
     * @param dir 이동 방향
     */
    showPage(name: showPageNameType, dir: 'next' | 'prev' = 'next') {
        if (['next', 'prev'].includes(name)) {
            this.lastCheckPageDir = name;
        }
        if (name === 'prev') {
            // 뒤로 
            this.pageStack = this.pageStack.slice(0, this.pageStack.length - 1);
            name = this.pageStack[this.pageStack.length - 1];
            dir = 'prev';
        } else {
            // 앞으로
            this.pageStack.push(name);
        }

        this.lastCheckPageDir = dir;

        console.log('this.pageStack', this.pageStack);
        Core.route.showPage(name, dir)
    }

    /**
    * 페이지 전환 
    * @param name 페이지 이름 
    * @param dir 이동 방향
    */
    pageSwitch(name: string, dir: 'next' | 'prev' = 'next') {
        Core.store.dispatch(showPage({
            pageName: name
        }));
    }

    showLoading() {
        Core.store.dispatch(showLoading());
    }

    hideLoading() {
        Core.store.dispatch(hideLoading());
    }
}

export default new View();