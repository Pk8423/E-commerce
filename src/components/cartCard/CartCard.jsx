import React from 'react'
import "./CartCard.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import image1 from "../../assets/image1.jpg"


import "./CartCard.css"
function CartCard() {
  return (
    <div className='Cartcard'>
      <div className="left-card">
<img src={image1} alt="" />
<div className="name-price">
    <span>samsung</span>
    <span>Rs 15000/-</span>
</div>
      </div>
      <div className="right-card">
        <button>Remove <RiDeleteBin6Line /></button>
       
      </div>
    </div>
  )
}

export default CartCard
