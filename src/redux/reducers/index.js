import { combineReducers } from "redux";
import { productReducer, setProductReducer, categoryReducer } from "./productReducer";

const reducers = combineReducers(
    {
        allProducts:productReducer,
        product: setProductReducer,
        categories: categoryReducer,
    }
)

export default reducers