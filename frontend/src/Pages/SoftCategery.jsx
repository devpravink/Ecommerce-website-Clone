import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContex } from '../Contex/ShopContex'
import dropdowm_icon from '../components/Asset/dropdown_icon.png'
import Item from '../components/Items/Items'

const SoftCategery = (props) => {
  const { all_product } = useContext(ShopContex)  // ✅ useContext instead of useState

  return (
    <div className='shop-categerory'>
      <img className='shopcategerory-banner' src={props.banner} alt="" />
      <div className="shopcategerory-indexSort">
        <p>
          <span> Showing 1-12</span> out of 36 product
        </p>
        <div className="shopcategerory-sort"> 
          Sort by <img src={dropdowm_icon} alt="" />
        </div>
      </div>
      <div className="shopcategerory-products">
        {all_product && all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More 
      </div>
    </div>
  )
}

export default SoftCategery
