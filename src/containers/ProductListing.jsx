import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from 'axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts, setCategories } from '../redux/actions/productActions'
import Loader from "./Loader";

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err)
        })

        const categories = await axios.get('https://fakestoreapi.com/products/categories').catch((err) => {
            console.log(err)
        })
        // console.log(categories.data)
        dispatch(setCategories(categories.data))
        dispatch(setProducts(response.data))
        // console.log("cats", productCategories)
    }

    useEffect(() => {
        fetchProducts()

    }, [])
    return (
        <>
            {
                products.allProducts.products.length > 0 ? (<div className="bg-white">
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-gray-900">
                                All Products
                            </h1>
                        </div>
                    </header>
                    <div className="max-w-2xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-4">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


                            <ProductComponent />
                        </div>
                    </div>
                </div>
                ) : (
                    <Loader />
                )

            }


        </>
    )
}

export default ProductListing;