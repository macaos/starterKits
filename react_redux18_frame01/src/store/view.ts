import { createAction } from "@reduxjs/toolkit"
import { setDefaultResultOrder } from "dns";
import Core from "../comm/Core";

export const SHOW_PAGE = "view/SHOW_PAGE";
export const REMOVE_BEFORE_PAGE = "view/REMOVE_BEFORE_PAGE"

export const SHOW_ALERT = "view/SHOW_ALERT";
export const HIDE_ALERT = "view/HIDE_ALERT";

export const SHOW_MODAL = "view/SHOW_MODAL";
export const HIDE_MODAL = "view/HIDE_MODAL";

export const SHOW_LOADING = "view/SHOW_LOADING";
export const HIDE_LOADING = "view/HIDE_LOADING";

export const showPage = createAction<{
    pageName: string,
    pageParam?: {
        [string: string]: any,
    }
}>(SHOW_PAGE);

export const removeBeforePage = createAction(REMOVE_BEFORE_PAGE);

export const showAlert = createAction<{
    message: string,
}>(SHOW_ALERT);
export const hideAlert = createAction(HIDE_ALERT);

export const showModal = createAction<{
    modalName: string,
    modalOptions: any,
}>(SHOW_MODAL);

export const hideModal = createAction<{
    modalName: string,
}>(HIDE_MODAL);


const initialViewState: {
    showPages: string[],
    showModals: string[],
    showLoadings: string[],
} = {
    showPages: [],
    showModals: [],
    showLoadings: [],
}

function viewReducer(state = initialViewState, action: any) {
    let showPagesArr: string[];
    // debugger;
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
                    Core.store.dispatch(removeBeforePage())
                }, 800);
            }
            return {
                ...state,
                showPages: showPagesArr,
            }

        case REMOVE_BEFORE_PAGE:
            showPagesArr = state.showPages;
            return {
                ...state,
                showPages: showPagesArr.slice(1),
            }

        case SHOW_MODAL:
            // const showModalName = action.payload.modalName;
            const showModalArr = state.showModals.push(action.payload.modalName);
            return {
                ...state,
                showModals: showModalArr,
            }

        case HIDE_MODAL:
            return {
                ...state,
            }

        case SHOW_ALERT:
            return {
                ...state,
            }

        case HIDE_ALERT:
            return {
                ...state,
            }

        case SHOW_LOADING:
            return {
                ...state,
            }

        case HIDE_LOADING:
            return {
                ...state,
            }

        default:
            return state;
    }
}
export default viewReducer;