import React from 'react'
import productosA from '../data/accesorios.json';
import { Link } from 'react-router-dom';

const ItemDetail = ({detail}) => {
     const {id,title,price,category,image} = detail 
     const findItem = productosA.find(productosA => productosA.id === productosA.value)
/* 
      return  ( 
      
      <div className="card" style ={{width: '10rem', display:'inline'}}>
      <img style={{width:'200px'}} src={image} className="card-img-top" alt ={id}></img>
      <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
      </div>
  </div>

  ) */
      }
     

export default ItemDetail