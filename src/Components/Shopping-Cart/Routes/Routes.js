import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from '../Container/Home'
import Product from '../Container/Product'
import Cart from '../Container/Cart'
import Checkout from '../Container/Checkout'
import Success from '../Container/Success'



function Routess() {
  return (
    <div>

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout/'>
              <Route path='' element={<Checkout/>}/>
              <Route path=':id' element={<Checkout/>}/>
            </Route>
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Routess