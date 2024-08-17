//product list

const ProductList=()=>{


    const products =[];

    return(
        <div>

            <h1>ProductFilter</h1>
            <div className="row mt-5">
                {products.map(product => (
                                    <div key ={product.id} class="card" style="width: 18rem;">
                                    <img src={product.image} class = "card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{product.name}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">add to cart</a>
                                    </div>
                                    </div>
                ))}

                </div>
        </div>
    )
}
export default ProductList