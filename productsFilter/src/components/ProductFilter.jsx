//filter products

import productStore from "../store";
import { fetchCategory } from "../api";
import { useEffect } from "react";



const ProductFilter=()=>{

    const {categories,setCategories,filters,setFilters} = productStore();


    useEffect(()=>{
        fetchCategory().then(setCategories)
    },[])

    const handelCategoryChange = (e) => {
        const {value,checked} = e.target
        console.log(value,checked)
    }
    const handePriceChange = (e) => {
        const {value,checked} = e.target
        console.log(value,checked)
    }


    return(
        <div>

            <h1>ProductFilter</h1>

            <div className="mt-5">
                <h5>
                    category
                    {categories.map(cat => (
                        <div key = {cat.id} className="form-check">
                            <input type="checkbox" 
                            className="form-check-input"
                            value={cat.id}
                            onChange={handelCategoryChange}
                            />
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
                        <input type="number"
                         className="form-control"
                          placeholder="Min Price"
                          value={filters.priceRange[0]}
                          onChange={handePriceChange}
                          />
                    </div>
                    <div className="col">
                        <input type="number" 
                        className="form-control" 
                        placeholder="Max Price"
                        value={filters.priceRange[1]}
                        onChange={handePriceChange}
                        />
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}
export default ProductFilter