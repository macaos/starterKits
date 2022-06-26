import { combineReducers } from "redux";
import counter from "./counter";
import view from "./view";

const rootReducer = combineReducers({
    counter,
    view,
})

export type RootStateType = {
    counter: {
        number: number
    },
    view: {
        showPages: any
    }
}

export default rootReducer;