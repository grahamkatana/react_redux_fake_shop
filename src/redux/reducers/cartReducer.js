import { ActionTypes } from "../constants/action-types";

const initialState = {
    numberCart:0,
    carts:[],
}
// //(state, action)
export const cartReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.GET_NUMBER_CART:
            return {...state};

        case ActionTypes.ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    id:payload.id,
                    category:payload.category,
                    quantity:1,
                    description:payload.description,
                    name:payload.title,
                    image:payload.image,
                    price:payload.price
                } 
                state.carts.push(cart); 

            }
            else{
                let check = false;
                state.carts.map((item,key)=>{
                    if(item.id==payload.id){
                        state.carts[key].quantity++;
                        check=true;
                    }
                });

                if(!check){
                    let cart = {
                        id:payload.id,
                        category:payload.category,
                        quantity:1,
                        description:payload.description,
                        name:payload.title,
                        image:payload.image,
                        price:payload.price
                    } 
                    state.carts.push(cart);
                }

            }
            return {...state,numberCart:state.numberCart+1}

        default:
            return state;
    }

}

// export const categoryReducer = (state = [], {type,payload})=>{
//     switch(type){
//         case ActionTypes.SET_CATEGORIES:
//             return {...state,...payload};
//         default:
//             return state;
//     }

// }

// export const setProductReducer = (state= {}, {type,payload})=>{
//     switch(type){
//         case ActionTypes.SET_PRODUCT:
//             return {...state,...payload};
//         case ActionTypes.REMOVE_SELECTED_PRODUCT:
//             return {};
//         default:
//             return state;
//     }

// }
