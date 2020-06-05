// import React, { createContext, useState, useReducer } from 'react';

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//     const [books, setBooks] = useState([
//         {title:'the way of kings', id:1},
//         {title:'the name of the wind', id:2},
//         {title:'the final empire', id:3}, 
//         {title:'the is the new book added', id:4}
//     ]);

//     const addBooks = (title) => {
//         setBooks([...books, {title, id:Math.random()}])
        
//     }
//     return (
//         <BookContext.Provider value={{books, addBooks}}>{props.children}</BookContext.Provider>
//     )
// }
// export default BookContextProvider; 

import React, { createContext, useState, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, []);
    


    // const addBooks = (title) => {
    //     setBooks([...books, {title, id:Math.random()}])
    // }
    return (
        <BookContext.Provider value={{books, dispatch}}>{props.children}</BookContext.Provider>
    )
}
export default BookContextProvider; 