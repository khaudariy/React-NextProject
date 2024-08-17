//filter products

import productStore from "../store";
import { fetchCategory } from "../api";
import { useEffect } from "react";



const ProductFilter=()=>{

    const {categories,setCategories} = productStore();


    useEffect(()=>{
        fetchCategory().then(setCategories)
    },[])


    return(
        <div>

            <h1>ProductFilter</h1>

            <div className="mt-5">
                <h5>
                    category
                    {categories.map(cat => (
                        <div key = {cat.id} className="form-check">
                            <input type="checkbox" className="form-check-input"/>
                            <label htmlFor="">{cat.name}</label>

                        </div>
                    ))}
                </h5>
            </div>
            <div className="mt-5">
                <h5>
                    price
                </h5>
                <div className="row">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Min Price"/>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Max Price"/>
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}
export default ProductFilter