import React from 'react'
import { Route } from 'react-router';
import Search from './components/Search';
import Home from './components/Home';
// import * as BooksAPI from './BooksAPI'
import './App.css'

function BooksApp () {
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */
  

  return (
    <div className="app">
      <Route exact path="/" component={Home}></Route>
      <Route path="/search" component={Search}></Route>
    </div>
  )
}

export default BooksApp
