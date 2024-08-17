//handel API
import axios from 'axios'

const API_URL = "http://127.0.0.1:8000/api"


export const fetchProducts =async (filters) => {
       
    const categoriesids=filters.categories.join(',')
    const price_min = filters.priceRange[0]
    const price_max = filters.priceRange[1]

    const params = {
        categories:categoriesids,
        price_min:price_min,
        price_max:price_max
    }
    
    
    
    
    
    
    const response = await axios.get(`${API_URL}/products/`,{params})
        return response.data
}

export const fetchCategory = async () => {
    const response = await axios.get(`${API_URL}/category/`)
    return response.data

}