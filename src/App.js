import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import Search from './components/Search';
import Home from './components/Home';
import * as BooksAPI from './BooksAPI';
import './App.css';

function BooksApp () {
  const [myBooks, setMyBooks] = useState([]);
  
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setMyBooks(books);
      return books;
    });
  }, []);

  const bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' }
  ];

  const switchBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      console.log(books);
    });
    const updatedBooks = myBooks.map((myBook) => {
      if (myBook.id === book.id) {
        myBook.shelf = shelf;
      } 
      return myBook
    })
    setMyBooks(updatedBooks)
  }

  return (
    <div className="app">
      <Route 
        exact path="/" 
        render={() => (
          <Home 
            bookshelves={bookshelves}
            books={myBooks}
            onSwitch={switchBook}
          />
        )}
      />
      <Route 
        path="/search" 
        render={() => (
          <Search
            myBooks={myBooks}
            onSwitch={switchBook}
          />
        )}
      />
    </div>
  )
}

export default BooksApp
