import React ,{useState}from "react";
import Card from "./Card";
import axios from "axios";



const Main = () => {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCQkLuGOPMxbLLikvLvVCk2iYu6guycVDA')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return (
        <>
            <nav className="navbar">
                <p>My library</p>
        
                
                <div className="row2">
                    <div className="search">
                    <input type="text" placeholder="find your book..."
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search" ></i></button>
                    </div>

                </div>

                </nav>

            

            <div className="container">
                {
                    <Card book={bookData}/>
                }
                
            </div>

        </>
    )
}

export default Main