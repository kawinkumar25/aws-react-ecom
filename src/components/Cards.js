import React from 'react';
import '../styles/cards.css'
import { UseMyContext } from '../App';
import list from '../data';


const Cards = () => {
    
    
  const {addItem,btn}=UseMyContext();
      
  return (
    
    <section>
     {
      
      list.map((item)=>(
        <div className="cards" key={item.id}>
        <div className="image_box">
            <img src={item.img} alt="Img-not-found" />
        </div>
        <div className="details">
            <p>Title: {item.title}</p>
            <p>Genre: {item.genre}</p>
            <p>Price - ₹{item.price}</p>
            <button  className={`${btn(item)? 'btColor' : 'btColorDefault'}`} onClick={() => addItem(item)}> {btn(item)? "Remove from Cart" : "Add to Cart" }</button>
        </div>
    </div>
      ))}
    </section>
    
  )
}

export default Cards