  import React, { useEffect, useState } from 'react';
  import productosA from '../data/accesorios.json';
  import productosI from '../data/indumentaria.json';
  import ItemList from './ItemList';
  import {useParams} from 'react-router-dom';
  
  const ItemListContainer = () => {
      
      const [products, setProducts] = useState([])
      
      const { categoryId } = useParams();
  
      console.log(categoryId);
  
      useEffect(()=> {
          const promesa = new Promise((acc, rej) => {
              setTimeout(() => {
                acc(productosA);
              }, 3000);
            });
          
            promesa
              .then((result) => {
                setProducts(result);
              })
              .catch((err) => {
                alert(err.message);
              });
        
          }, [categoryId])
  
          console.log(products);
  
          return (
  
          <div>
             <ItemList productos={products}/>
          </div>
          )
  }
  
  export default ItemListContainer;