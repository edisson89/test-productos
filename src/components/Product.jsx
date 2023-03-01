import React, { useRef, useState } from 'react'
import styles from '../App.module.css'

const Product = ({item}) => {
  
 const [title, setTitle] = useState('')
 const [count, setCount] = useState(1)
  function onchange(event) {
    event.preventDefault();
      setTitle(event.target.value)
    
  }
  
  return (
    <div className={styles.product} >
     <img width={240} height={150} className={styles.image} src={item.img} alt={item.name} />
     
      {(title) ? <h1>{title}</h1> : <h1>{item.title}</h1> }
     
     <form action="value">
      <input type="text" placeholder='Ingrese un titulo' onChange={onchange} />
     </form>
     <br />
     <span> ${item.precio * count}  </span><span className={styles.cantidad}>{count}</span>
    
     <h4>{item.caracteristicas}</h4>
       <div className={styles.btnContainer}>
        <button className={styles.btn}  onClick={() => setCount((count) => count + 1)}>Add to Cart</button>
      <br></br>
    
      
       </div>
     
  <u>Learn More</u>
    
     
  {'El total de productos es  : '+  count}
    </div>
  )
}

export default Product