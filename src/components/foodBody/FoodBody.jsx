import React from 'react'
import "./foodBody.css"
import ItemList from './Item_list/ItemList'
import Quotes from './Quotes/Quotes'

const FoodBody = () => {
  return (
    <div className='body_Container'>
      <Quotes />
      <ItemList />
    </div>
  )
}

export default FoodBody