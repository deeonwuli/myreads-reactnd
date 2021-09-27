import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from "../BooksAPI";
import Book from './Book';

export default function Search (props) {
  const [query, setQuery] = useState("");
  const [updatedBooks, setUpdatedBooks] = useState([]);
  const { onSwitch } = props;

  const searchBooks = (e) => {
    const query = e.target.value;
    setQuery(query)

    if (query) {
      BooksAPI.search(query.trim(), 20).then((books) => {
        books.length > 0
        ? setUpdatedBooks(books)
        : setUpdatedBooks([])
      })
    } else {
      setUpdatedBooks([])
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={searchBooks}
            autoFocus
          />
        </div>
      </div>
      <div className="search-books-results">
        {updatedBooks.length > 0 && (
          <>
            <p>{updatedBooks.length} results</p>
            <ol className="books-grid">
              {updatedBooks.map(book => {
                const shelf = props.myBooks.find(b => b.id === book.id);
                return (
                  <Book
                    key={book.id}
                    book={book}
                    shelf={shelf ? shelf.shelf : 'none'}
                    onSwitch={onSwitch}
                  />
                )}
              )}
            </ol>
          </>
        )}
        </div>
    </div> 
  )
}