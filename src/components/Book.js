import React from 'react';
import BookshelfChanger from './BookshelfChanger';

export default function Book(props) {
  const { book, shelf, onSwitch } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
        <BookshelfChanger book={book} shelf={shelf} onSwitch={onSwitch} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors[0]}</div>
    </div>
  )
}