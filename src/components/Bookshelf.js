import React from 'react';
import Book from './Book';

export default function Bookshelf (props) {
  const { shelf, books, onSwitch } = props;
  const booksOnShelf = books.filter(book => book.shelf === shelf.key);

  return <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((book) => (
            <Book key={book.id} book={book} shelf={shelf} onSwitch={onSwitch} />
          ))}
        </ol>
      </div>
    </div>;
}