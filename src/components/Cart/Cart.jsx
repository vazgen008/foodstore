import React from 'react'
import './Cart.css'
import Button from '../Button/Button'
function Cart({cartItems,onCheckOut}) {
  const totalPrice = cartItems.reduce((a,c)=>a+c.price*c.quantity,0)
  return (
    <>
    {cartItems.length==0&&'No Items In Cart'}
    <Button title={`${cartItems.length==0?'Order!':'Checkout'}`} onClick={onCheckOut} type={'checkout'} disable={cartItems==0}/>
      {cartItems.length!==0 && <div className='cart__container'>
        Total Price : {totalPrice.toFixed(2)}$
      </div> }

    </>
  )
}

export default Cart
