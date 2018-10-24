import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead';
import Read from './Read'

class BookShelf extends Component {
render() {
    return (
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <CurrentlyReading 
            books={this.props.books}
            moveShelf={this.props.moveShelf}
        />
        <WantToRead 
            books={this.props.books}
            moveShelf={this.props.moveShelf}
        />
        <Read 
            books={this.props.books}
            moveShelf={this.props.moveShelf}
        />
        <div className="open-search">
            <Link className="search-books" to="/search">Add a book</Link>
        </div>
        </div>
    )
}
}

export default BookShelf