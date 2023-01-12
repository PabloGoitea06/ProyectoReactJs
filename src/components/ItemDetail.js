import React from 'react'

const ItemDetail = ({detail}) => {
    const {id,title,price,category,image} = detail
    console.log(detail);
  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail