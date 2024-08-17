import { useState } from 'react'
import ProductFilter from './components/ProductFilter'
import ProductList from './components/ProductList'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div> 
    <div>
      <ProductFilter/>
    </div>
    <div>
      <ProductList/>
    </div>
 </div>
  )
}

export default App
