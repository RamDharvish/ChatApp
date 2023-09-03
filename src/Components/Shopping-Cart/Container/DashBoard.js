import React from 'react'
import { ProductList } from '../Data/ProductList'
import ProductCard from '../Component/ProductCard'

function DashBoard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
      {
        ProductList.map((product)=><ProductCard {...product} key={product.id} />)
      }
    </div>
  )
}

export default DashBoard