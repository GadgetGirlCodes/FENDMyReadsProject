import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        moveShelf={this.props.moveShelf}
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

export default Shelf