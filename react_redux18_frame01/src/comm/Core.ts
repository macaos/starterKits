import Alert from "./Alert";
import Loading from "./Loading";
import Modal from "./Modal";
import View from "./View";

class Core {
    get alert() {
        return Alert;
    }
    get loading() {
        return Loading
    }
    get modal() {
        return Modal;
    }
    get view() {
        return View;
    }
}

export default new Core();