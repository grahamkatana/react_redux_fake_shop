import { combineReducers } from "redux";
import { productReducer, setProductReducer, categoryReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers(
    {
        allProducts:productReducer,
        product: setProductReducer,
        categories: categoryReducer,
        cart:cartReducer
    }
)

export default reducers