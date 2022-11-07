import React from "react";
import { useState } from "react";
import BookDetails from "./BookDetails";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {book.map((item) => {
        let thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
        return (
          <>
            <div
              className="card"
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
              </div>
            </div>
            <BookDetails
              show={show}
              item={bookItem}
              onClose={() => setShow(false)}
            />
          </>
        );
      })}
    </>
  );
};

export default Card;
