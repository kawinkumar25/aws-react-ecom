import React from 'react'
import '../styles/cards.css'
import { UseMyContext } from '../App';

const Individual = () => {

    const {  searchCart,addItem,btn } = UseMyContext();

    return (

        <section>
            {searchCart.map(item =>
                <div className="cards" key={item.id}>
                    <div className="image_box">
                        <img src={item.img} alt="Img-not-found" />
                    </div>
                    <div className="details">
                        <p>Title: {item.title}</p>
                        <p>Genre: {item.genre}</p>
                        <p>Price - {item.price}Rs</p>
                        <button onClick={() => addItem(item)}>{btn(item) ? "Remove from Cart" : "Add to Cart"}</button>
                    </div>
                </div>
                 )}
    </section>

    )
}

export default Individual
