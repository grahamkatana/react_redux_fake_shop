import fakeStoreApi from "../../apis/fakeStoreApi"
import { ActionTypes } from "../constants/action-types"
import axios from "axios"

export const fetchProducts = () =>{
    return async function (dispatch){
        const response = await axios.get('https://fakestoreapi.com/products')
        dispatch({
            type:ActionTypes.FETCH_PRODUCTS,
            payload:response.data
        })
    }
}

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
