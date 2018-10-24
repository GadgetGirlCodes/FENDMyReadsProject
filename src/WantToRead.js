import React, { Component } from 'react'
import Books from './Books'

class WantToRead extends Component {
  render() {
    return (
      <div className="list-books-content">
      <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
          <div className="bookshelf-books">
              <ol className="books-grid">
              {
                  this.props.books
                  .filter(book => book.shelf === 'wantToRead')
                  .map(book => (
                      <li key={book.id}>
                          <Books
                              book={book}
                              moveShelf={this.props.moveShelf}
                              currentShelf="wantToRead"
                          />
                      </li>
                  ))
              }
              </ol>
          </div>
      </div>
  </div>
    )
  }
}

export default WantToRead