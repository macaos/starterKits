import { createAction } from "@reduxjs/toolkit"
import { setDefaultResultOrder } from "dns";
import Core from "../comm/Core";

// types
export type ShowAlertType = {
    message: string,
    isConfirm?: boolean,
    callback?: Function,
}

// 
export const SHOW_PAGE = "view/SHOW_PAGE";
export const REMOVE_BEFORE_PAGE = "view/REMOVE_BEFORE_PAGE"

export const SHOW_ALERT = "view/SHOW_ALERT";
export const HIDE_ALERT = "view/HIDE_ALERT";

export const SHOW_MODAL = "view/SHOW_MODAL";
export const HIDE_MODAL = "view/HIDE_MODAL";

export const SHOW_LOADING = "view/SHOW_LOADING";
export const HIDE_LOADING = "view/HIDE_LOADING";


// actions
export const showPage = createAction<{
    pageName: string,
    pageParam?: {
        [string: string]: any,
    }
}>(SHOW_PAGE);

export const removeBeforePage = createAction(REMOVE_BEFORE_PAGE);

export const showAlert = createAction<ShowAlertType>(SHOW_ALERT);
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


// state
const initialViewState: {
    showPages: string[],
    showModals: string[],
    showLoading: boolean,
    showAlert: ShowAlertType | null,
} = {
    showPages: [],
    showModals: [],
    showLoading: false,
    showAlert: null,
}

// reducer
function viewReducer(state = initialViewState, action: any) {
    let showPagesArr: string[];
    let showLoading: boolean = false;
    let showModalsArr: string[];
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
            showModalsArr = state.showModals.slice(0);
            showModalsArr.push(action.payload.modalName);
            return {
                ...state,
                showModals: showModalsArr,
            }

        case HIDE_MODAL:
            // 닫을 모달 지정 또는 미지정시 마지막 모달 
            const hideModalName = action.payload.modalName || state.showModals[state.showModals.length - 1];
            // 전체 종료(all)
            if (hideModalName === 'all') {
                showModalsArr = [];
            } else {
                showModalsArr = state.showModals.filter((name: string, i: number) => {
                    // 삭제 
                    return name !== hideModalName;
                })
            }
            return {
                ...state,
                showModals: showModalsArr,
            }

        case SHOW_ALERT:
            return {
                ...state,
                showAlert: action.payload,
            }

        case HIDE_ALERT:
            return {
                ...state,
                showAlert: null,
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