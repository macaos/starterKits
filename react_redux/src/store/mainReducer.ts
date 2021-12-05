import { createAction } from "redux-actions";

/////////
// types 
export const SET_DEVICE = "main/SET_DEVICE";

/////////
// actions  
export const setDevice = createAction<{
    device: string
}>(SET_DEVICE)


/////////
// reducer 
const initialState = {
    device: 'mobile'
}

const mainReducer = (state = initialState, action: {
    type: string,
    payload: any,
}) => {
    switch (action.type) {
        case SET_DEVICE:
            return {
                ...state
            }

        default:
            return state;
    }
}

export default mainReducer;