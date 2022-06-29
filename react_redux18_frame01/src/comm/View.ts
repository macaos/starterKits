import { showPage } from "../store/view";
import Core from "./Core";

class View {
    /**
     * 페이지 전환 
     * @param name 페이지 이름 
     * @param dir 이동 방향
     */
    showPage(name: string, dir: 'next' | 'prev' = 'next') {
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
        }))
    }
}

export default new View();