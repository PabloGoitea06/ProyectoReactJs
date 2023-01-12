import React, { useEffect, useState } from 'react';
import productosA from '../data/accesorios.json';
import productosI from '../data/indumentaria.json';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})

    const {id} = useParams()

    useEffect(()=> {
        const promesa = new Promise((acc, rej) => {
            setTimeout(() => {
              acc(productosA);
            }, 3000);
          });
        
          promesa
            .then((result) => {
              setDetail(result);
            })
            .catch((err) => {
              alert(err.message);
            });
      
        }, [id])

        console.log(detail);

        return (

        <div>
           <ItemDetail detail={detail}/>
        </div>
        )
}

export default ItemDetailContainer;