import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const setProduct = (product)=>{
    return {
        type:ActionTypes.SET_PRODUCT,
        payload:product,
    }
}

export const removeProduct = ()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const setCategories = (categories)=>{
    return {
        type:ActionTypes.SET_CATEGORIES,
        payload:categories,
    }

}
