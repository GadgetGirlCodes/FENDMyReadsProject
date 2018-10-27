import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class BookShelf extends Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
                <Shelf books={this.props.books.filter(b => b.shelf === "currentlyReading")} moveShelf={this.props.moveShelf} name="Currently Reading" />
                <Shelf books={this.props.books.filter(b => b.shelf === "wantToRead")} moveShelf={this.props.moveShelf} name="Want To Read" />
                <Shelf books={this.props.books.filter(b => b.shelf === "read")} moveShelf={this.props.moveShelf} name="Read" />
            <div className="open-search">
                <Link className="search-books" to="/search">Add a book</Link>
            </div>
            </div>
        )
    }
}

export default BookShelf