import React from "react";
import book from "./images/book.png";


const Card = ({book}) =>{
    console.log(book)
    return(
        <>

        {
            book.map((item) =>{
                let thumbnail=item.volumeInfo.imageLinks.smallThumbnail;
                return(
                    <>
                    <div className="card ">
            <img src={thumbnail} alt= "" />
            <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                
            </div>
        </div>

        </>
                )
            })
            

        }
        
        
        </>
    )
}

export default Card;