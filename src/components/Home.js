import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

export default function Home() {
  return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf title="Currently Reading" />
        <Bookshelf title="Want to Read" />
        <Bookshelf title="Read" />
      </div>
      <Link to="/search" className="open-search">
        Add a book
      </Link>
    </div>;
}
