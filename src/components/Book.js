import React, { useState } from 'react';
import BookshelfChanger from './BookshelfChanger';
import BookModal from './BookModal';
import ReactStars from "react-rating-stars-component";

export default function Book(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  };

  const { book, shelf, onSwitch } = props;

  return <div className="book">
      <div className="book-top">
        <div className="book-cover" onClick={handleOpen} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
        <BookshelfChanger book={book} shelf={shelf} onSwitch={onSwitch} />
      </div>
      <div className="book-title" onClick={handleOpen}>
        {book.title}
      </div>
      {book.authors && book.authors.map((author, index) => (
          <div className="book-authors" key={index}>
            {author}
          </div>
        ))}
      <div className="rating">
        <ReactStars count={5} edit={false} value={book.averageRating} size={16} isHalf={true} emptyIcon={<i className="far fa-star" />} halfIcon={<i className="fa fa-star-half-alt" />} fullIcon={<i className="fa fa-star" />} activeColor="#ffd700" />
        <p>{book.ratingsCount ? book.ratingsCount : "0"}</p>
      </div>
      {showModal && <BookModal>
          <button onClick={handleClose} />
          <p className="modal-title">{book.title}</p>
          <div>
            {book.authors && book.authors.map((author, index) => (
                <div className="book-authors" key={index}>
                  - {author}
                </div>
              ))}
          </div>
          <p>{book.description}</p>
          <div className="modal-bottom">
            <p>Pages: {book.pageCount}</p>
            {book.categories && book.categories.map((category, index) => (
                <div className="book-categories" key={index}>
                  {category}
                </div>
              ))}
          </div>
        </BookModal>}
    </div>;
}