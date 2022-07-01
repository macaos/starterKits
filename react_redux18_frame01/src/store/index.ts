import { combineReducers } from "redux";
import counter from "./counter";
import view from "./view";

const rootReducer = combineReducers({
    counter,
    view,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootStateType = {
    counter: {
        number: number
    },
    view: {
        showPages: string[],
        showLoading: boolean,
    }
}

export default rootReducer;