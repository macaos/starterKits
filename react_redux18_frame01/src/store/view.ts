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

export const showLoading = createAction(SHOW_LOADING);
export const hideLoading = createAction(HIDE_LOADING);


const initialViewState: {
    showPages: string[],
    showModals: string[],
    showLoading: boolean,
} = {
    showPages: [],
    showModals: [],
    showLoading: false,
}

function viewReducer(state = initialViewState, action: any) {
    let showPagesArr: string[];
    let showLoading: boolean = false;
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
                showLoading = true;
                setTimeout(() => {
                    Core.store.dispatch(removeBeforePage());
                }, 800);
            }
            return {
                ...state,
                showPages: showPagesArr,
                showLoading
            }

        case REMOVE_BEFORE_PAGE:
            showPagesArr = state.showPages;
            showLoading = false;
            return {
                ...state,
                showPages: showPagesArr.slice(1),
                showLoading
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
                showLoading: true,
            }

        case HIDE_LOADING:
            return {
                ...state,
                showLoading: false,
            }

        default:
            return state;
    }
}
export default viewReducer;