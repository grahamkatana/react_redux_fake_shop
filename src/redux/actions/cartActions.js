import { ActionTypes } from "../constants/action-types"

export const getNumberCart = () =>{
    return{
        type:ActionTypes.GET_NUMBER_CART
    }
}

export const addCart = (product) =>{
    return{
        type:ActionTypes.ADD_CART,
        payload:product,
    }

}

export const updateCart = (product) =>{
    return{
        type:ActionTypes.UPDATE_CART,
        payload:product,
    }

}

export const deleteCart = (product) =>{
    return{
        type:ActionTypes.DELETE_CART,
        payload:product,
    }

}

export const increaseQuantity = (product) =>{
    return{
        type:ActionTypes.INCREASE_QUANTITY,
        payload:product,
    }

}


export const decreaseQuantity = (product) =>{
    return{
        type:ActionTypes.DECREASE_QUANTITY,
        payload:product,
    }

}

// export const setProducts = (products) =>{
//     return {
//         type:ActionTypes.SET_PRODUCTS,
//         payload:products,
//     }
// }

// export const setProduct = (product)=>{
//     return {
//         type:ActionTypes.SET_PRODUCT,
//         payload:product,
//     }
// }

// export const removeProduct = ()=>{
//     return {
//         type:ActionTypes.REMOVE_SELECTED_PRODUCT,
//     }
// }

// export const setCategories = (categories)=>{
//     return {
//         type:ActionTypes.SET_CATEGORIES,
//         payload:categories,
//     }

// }
