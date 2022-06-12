import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
    counter,
})

export type RootStateType = {
    counter: {
        number: number
    }
}

export default rootReducer;