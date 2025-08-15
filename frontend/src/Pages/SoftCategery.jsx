import React, { useState } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContex } from '../Contex/ShopContex'

const SoftCategery = (props) => {
  const {all_product} = useState(ShopContex)
  return (
    <div className='shop-categerory'>
      <img src={props.banner} alt="" />
      <div className="shopcategerory-indexSort">
        
      </div>
    </div>
  )
}

export default SoftCategery