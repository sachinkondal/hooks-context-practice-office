import React, { Component, useContext, useState } from "react";
import {BookContext} from '../contexts/BookContext'; 
const AddBook = () => {
    //const { addBooks } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); 
        //addBooks(title);
        dispatch({type:'ADD_BOOK', book: {
            title:title
        }})
        setTitle('')
    }
    
    return(
       <form onSubmit={handleSubmit}>
           <label>Add Book: </label>
           <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} name="addbook" />
           <input type="submit" value="submit"/>
           <br/><br/><br/><br/>
       </form>
    )
}
export default AddBook; 
