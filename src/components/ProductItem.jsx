import React, {  useState } from "react";
import styles from "../App.module.css";

const ProductItem = ({data,addToCart}) => {
  let { img, name, precio, title, caracteristicas,id,quantity = 1} = data;
  const [titleOne, setTitleOne] = useState("");
  
  
  function onchange(event) {
    event.preventDefault();
    setTitleOne(event.target.value);
  }
  return (
    <div className={styles.productItem}>
      <div className={styles.contenedorImage}>
        <img
          className={styles.image}
          width={270}
          height={150}
          src={img}
          alt={name}
        />

        {titleOne ? <h1>{titleOne}</h1> : <h1>{title}</h1>}

        <form action="value">
          <input
            type="text"
            className={styles.input}
            placeholder="Ingrese un titulo"
            onChange={onchange}
          />
        </form>
        <br />
        <div>
        <span className={styles.precio}> ${precio} 
        <span className={styles.cantidad}>{quantity}</span>
        </span> 

        </div>
        
        <h4>{caracteristicas}</h4>
        <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => addToCart(id)}>Add to Cart </button>
          
         
        </div>
      <br></br>
        <u><a href="/" target="_blank" rel="noopener noreferrer">link more</a></u>

       
      </div>
    </div>
  );
};

export default ProductItem;
