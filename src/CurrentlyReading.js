import React, { Component } from 'react'
import Books from './Books'

class CurrentlyReading extends Component {
    render() {
        return (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {
                            this.props.books
                            .filter(book => book.shelf === 'currentlyReading')
                            .map(book => (
                                <li key={book.id}>
                                    <Books
                                        book={book}
                                        moveShelf={this.props.moveShelf}
                                        currentShelf="currentlyReading"
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

export default CurrentlyReading