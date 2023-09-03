import React, { useState } from 'react'
import Header from '../Component/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../Data/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Redux/reducer/Cart'

function Product() {
  const dispatch=useDispatch()
  const params = useParams()
  const navigate=useNavigate()
  const props = ProductList.find((element) => element.id === parseInt(params.id))

  const[alert,setAlert] =useState(false)
 
  const list =useSelector((state)=> state.cart.list)
  const element =list.find((item)=>item.id===props.id)

  const addToCart=()=> {
    setAlert(true)
    setTimeout(()=>setAlert(false),3000)
       dispatch(addItem(props))
  }
  return (
    <div>

      <Header />
      <div className='card m-2' style={{width:"100%"}}>
      {alert && <span className='alert alert-success'>Item Added To Card</span>}
        <div className='mt-2 '>
          <img src={props.thumbnail} height={350} width={400} alt={props.title} className='border-radius-9' />
        </div>
        <div className="card-body mt-3">
          <h5 className="card-title">{props.title}</h5>
          <h6 className='mt-2'>Price : {`$ ${props.price}`}</h6>
          <h6 className='mt-2'>Discount : {props.discountPercentage}%</h6>
          <h6 className='mt-2'>Rating : {props.rating}<i class="fa-solid fa-star"></i></h6>
          <div>
            {props.stock > 0 ?(
              <>
              <button className='btn btn-success' onClick={()=>navigate(`/checkout/${props.id}`)}>Buy Now</button> 
            {element?.count > 0 ?   <button className=' ms-3 btn btn-outline-warning' onClick={()=>navigate('/cart')}>Go To Cart</button> :
            <button className=' ms-3 btn btn-success' onClick={addToCart}>Add To Cart</button> 
            }
            </>
           )  :(
            <button className='btn btn-outline-danger'>Out of Stock</button>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product