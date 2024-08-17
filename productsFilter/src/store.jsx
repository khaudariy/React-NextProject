//manage state
import {create} from 'zustand'
const productStore = create(
    set => ({
        products:[],
        categories:[],
        filters:{
            categories: [],
            priceRange:[0,3000]

        },

        setProducts: (products) => set({products}),
        setCategories: (categories) =>set({categories}),
        setFilters: (filters => set())
    })

)
export default productStore