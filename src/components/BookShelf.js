import React from "react";
import book from "./images/book.png"
import './BookShelf.css';

const BookShelf = ({title,id,imageLink}) => {
  
  return (
    <div className="bookshelf">
      <img src={require('./images/book.png')} alt="" />
      <div className="bookshelf_bottom">
        <h3 className="book_title"> {title}</h3>
        
      </div>
      
    </div>
  );

}



export default BookShelf;

