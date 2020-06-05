import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook'
import ThemeContextProvider from './contexts/ThemeContexts';
import AuthContextProvider from './contexts/AuthContext';
import BookContext from './contexts/BookContext'; 

import ThemeToogle from './components/ThemeToogle'; 
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContext>
            <BookList />
            <AddBook />
          </BookContext>
          <ThemeToogle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App; 