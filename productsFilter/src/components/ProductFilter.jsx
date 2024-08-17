//filter products
const ProductFilter=()=>{

    const categories = [];

    return(
        <div>

            <h1>ProductFilter</h1>

            <div className="mt-5">
                <h5>
                    category
                    {categories.map(cat => (
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input"/>
                            <label htmlFor="">{category.name}</label>

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