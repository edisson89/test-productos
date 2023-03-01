import React from 'react'

const CartItem = ({data,delFromCart}) => {
  let {id,name,precio,quantity} = data
  return (
    <div>
      
      <h4>{name}</h4>
      <h5>${precio}.00 x {quantity} = $ {precio  * quantity}.00</h5>
      <button onClick={()=> delFromCart(id)}>Eliminar</button>
     <br />
      <button onClick={()=>delFromCart(id,true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem