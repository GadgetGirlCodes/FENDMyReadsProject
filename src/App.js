import React, { Component } from 'react'
import BookShelf from './BookShelf'
import ShowSearch from './ShowSearch'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => (
      BooksAPI.getAll().then((books) => (
        this.setState({ books: books })
      ))
    ))
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf 
          books={this.state.books}
          moveShelf={this.moveShelf}
          />
        )} />
        <Route path="/search" render={() => (
          <ShowSearch
          books={this.state.books}
          moveShelf={this.moveShelf}
            />
        )} />
      </div>
    )
  }
}

export default BooksApp