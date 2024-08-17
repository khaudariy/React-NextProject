//product list


import { useEffect } from "react";
import { fetchProducts } from "../api";
import productStore from "../store";


const ProductList = () => {


    const {products,setProducts} =productStore();
    useEffect(()=>{
        fetchProducts().then(setProducts)
    },[])
    return(
        <div>

            <h1>ProductFilter</h1>
            <div className="row mt-5">
                { products.map(product => (
                                <div key ={product.id} className="col-lg-4">
                                    <div className="card">
                                    <img src={product.image} className = "card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">add to cart</a>
                                        </div>
                                    </div>
                                </div>    
                ))}

                </div>
        </div>
    )
}
export default ProductList