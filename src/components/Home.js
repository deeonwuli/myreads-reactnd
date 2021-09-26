import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";

export default function Home(props) {
  const { bookshelves, books, onSwitch } = props;

  return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookshelves.map((shelf) => (
          <Bookshelf key={shelf.key} shelf={shelf} books={books} onSwitch={onSwitch} />
        ))}
      </div>
      <Link to="/search" className="open-search">
        Add a book
      </Link>
    </div>;
}

Home.propTypes = {
  bookshelves: PropTypes.array.isRequired,
  onSwitch: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};
