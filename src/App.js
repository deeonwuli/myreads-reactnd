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
    let updatedBooks = []
    updatedBooks = myBooks.filter((myBook) => 
      myBook.id !== book.id
    )
    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book)
    }
    setMyBooks(updatedBooks)
  }

  console.log(myBooks)

  if (!myBooks.length) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
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
