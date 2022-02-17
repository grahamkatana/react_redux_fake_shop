import { ActionTypes } from "../constants/action-types";

const initialState = {
    products:[],
}
//(state, action)
export const productReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        case ActionTypes.FETCH_PRODUCTS:
             return {...state,products:payload};
        default:
            return state;
    }

}

export const categoryReducer = (state = [], {type,payload})=>{
    switch(type){
        case ActionTypes.SET_CATEGORIES:
            return {...state,...payload};
        default:
            return state;
    }

}

export const setProductReducer = (state= {}, {type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }

}
