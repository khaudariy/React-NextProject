import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'
import ProductFilter from './components/ProductFilter'
import ProductList from './components/ProductList'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className='container my-4'> 
  <div className='row'>
    <div className='col-lg-3'>
      <ProductFilter/>
    </div>
    <div className='col-lg-9'>
      <ProductList/>
    </div>
 </div>
 </div>
  )
}

export default App
