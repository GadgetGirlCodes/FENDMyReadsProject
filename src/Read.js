import React, { Component } from 'react'
import Books from './Books'

class Read extends Component {
  render() {
    return (
      <div className="list-books-content">
      <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
              <ol className="books-grid">
              {
                  this.props.books
                  .filter(book => book.shelf === 'read')
                  .map(book => (
                      <li key={book.id}>
                          <Books
                              book={book}
                              moveShelf={this.props.moveShelf}
                              currentShelf="read"
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

export default Read