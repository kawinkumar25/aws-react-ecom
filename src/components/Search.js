import React from 'react'
import '../styles/search.css'
import {Link} from "react-router-dom"
import { UseMyContext } from '../App';
import list from '../data';
const Search = () => {
  const {searchCart,setSearchCart}=UseMyContext();
  const Validate=(check)=>
  {
    const filter = list.filter((item)=> check===item.genre);
    setSearchCart(filter)
    console.log(searchCart)
    
  }
  
  return (
    <div className='search'>
        <div className='title'>
            GENRE SEARCH
        </div>
            <Link to ="/"><div className='books' >ALL BOOKS</div></Link>
            <Link to="/individual"><div className='books' onClick={()=>Validate("Children books")}>Children Books</div></Link>
            <Link to="/individual"><div className='books'onClick={()=>Validate("Horror books")}>Horror books</div></Link>
            <Link to="/individual"><div className='books'onClick={()=>Validate("Love books")}>Love books</div></Link>
            <Link to="/individual"><div className='books'onClick={()=>Validate("Action books")}>Action books</div></Link>
            <Link to="/individual"><div className='books'onClick={()=>Validate("Marvel books")}>Marvel books</div></Link>
      
    </div>
  )
}

export default Search
