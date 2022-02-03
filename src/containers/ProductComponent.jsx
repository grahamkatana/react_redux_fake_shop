import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const categories = useSelector((state) => state.categories)
    const keys = Object.values(categories)


   // console.log('catss',keys)
  
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <div className="group relative" key={id}>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src={image} alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link to={`/product/${id}`}>
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {title.substring(0, 12)}...
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${price}</p>
                </div>
            </div>
        )
    })
    //const {id, title} = products
    //console.log(id)
    return (
        <>{renderList}</>
    );
}

export default ProductComponent;