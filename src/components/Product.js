import React from 'react'

export default function Product({id,name,price}) {
  return (
    <div key={id} className='product'>
    <p>{name}</p>
    <p>{price}</p>
</div>
  )
}
