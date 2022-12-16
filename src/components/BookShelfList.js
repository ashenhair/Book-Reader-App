import React from "react";
import BookShelf from "./BookShelf";
import { booklist } from "./booklist";



const BookShelfList = ({booklist}) => {
    const BookShelfcomponent = booklist.map((user,i) => {
        return <BookShelf id={booklist[i].id} title={booklist[i].title}
        />
    })
    return (
        <div className="container">
          {BookShelfcomponent}
        </div>
    );
}

export default BookShelfList