import { createAction } from "@reduxjs/toolkit"
import { setDefaultResultOrder } from "dns";

export const SHOW_PAGE = "view/SHOW_PAGE";

export const SHOW_ALERT = "view/SHOW_ALERT";
export const HIDE_ALERT = "view/HIDE_ALERT";

export const SHOW_MODAL = "view/SHOW_MODAL";
export const HIDE_MODAL = "view/HIDE_MODAL";

export const SHOW_LOADING = "view/SHOW_LOADING";
export const HIDE_LOADING = "view/HIDE_LOADING";

export const showPage = createAction<{
    pageName: string,
    pageParam: {
        [string: string]: any,
    }
}>(SHOW_PAGE);

export const showAlert = createAction<{
    message: string,
}>(SHOW_ALERT);
export const hideAlert = createAction(HIDE_ALERT);


const initialViewState = {
    showPages: [],
    showModals: [],
    showLoadings: [],
}

function viewReducer(state = initialViewState, action: any) {
    let showPagesArr: string[];
    switch (action.type) {
        case SHOW_PAGE:
            showPagesArr = state.showPages;

            if (showPagesArr.length > 1) {
                // paging...
                showPagesArr = showPagesArr.slice(1);
            }
            showPagesArr.push(action.payload.pageName);
            if (state.showPages.length > 1) {
                setTimeout(() => {

                }, 800);
            }
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default viewReducer;