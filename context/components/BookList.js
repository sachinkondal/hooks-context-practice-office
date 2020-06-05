import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContexts';
import { BookContext } from '../contexts/BookContext';
// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() { 
//         const {isLightTheme, light,  dark} = this.context; 
//         const theme = isLightTheme ? light:dark;
//         return ( 
//         <div className="book-list" style={{colcor:theme.synatx, background:theme.bg}}>
//             <ul>
//             <li style={{background:theme.ui}}>the way of kings</li>
//             <li style={{background:theme.ui}}>the name of the wind</li>
//             <li style={{background:theme.ui}}>the final empire</li>
//             </ul>
//         </div>
//         );
//     }
// }

const BookList = () => {
    const {isLightTheme, light,  dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light:dark;
    const {books, book} = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    const deleteSong = (id) => {
        dispatch({type:'REMOVE_BOOK', id:id}); 
    }
    return(
        <div className="book-list" style={{colcor:theme.synatx, background:theme.bg}}>
            <ul>
                {
                    books.map(book => (
                    <li onClick = {() => deleteSong(book.id)} key={book.id} style={{background:theme.ui}}>{book.title}</li>
                    ))
                }
                {/* <li style={{background:theme.ui}}>the way of kings</li>
                <li style={{background:theme.ui}}>the name of the wind</li>
                <li style={{background:theme.ui}}>the final empire</li> */}
            </ul>
        </div>
    )
}

export default BookList;