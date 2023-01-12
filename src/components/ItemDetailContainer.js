import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import productosA from '../data/accesorios.json';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    
    const [detail, setDetail] = useState({})
    useEffect(()=> {
        const promesa = new Promise((acc, rej) => {
            setTimeout(() => {
              acc({productosA});
            }, 3000);
          });
        
          promesa
            .then((result) => {
              setDetail(result);
            })
            .catch((err) => {
              alert(err.message);
            });
      
        }, [])

        console.log(detail);

        return (

        <div>
           <ItemDetail detail={detail}/>
        </div>
        )
}

export default ItemDetailContainer;