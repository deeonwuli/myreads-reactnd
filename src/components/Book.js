import React from 'react';
import BookshelfChanger from './BookshelfChanger';
import ReactStars from "react-rating-stars-component";

export default function Book(props) {
  const { book, shelf, onSwitch } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
        <BookshelfChanger book={book} shelf={shelf} onSwitch={onSwitch} />
      </div>
      <div className="book-title">{book.title}</div>
        {book.authors && book.authors.map((author, index) => (
          <div className="book-authors" key={index}>
            {author}
          </div>
        ))}
      <div className="rating">
        <ReactStars count={5} edit={false} value={book.averageRating} size={16} isHalf={true} emptyIcon={<i className="far fa-star" />} halfIcon={<i className="fa fa-star-half-alt" />} fullIcon={<i className="fa fa-star" />} activeColor="#ffd700" />
        <p>{book.ratingsCount ? book.ratingsCount : '0'}</p>
      </div>
    </div>
  )
}