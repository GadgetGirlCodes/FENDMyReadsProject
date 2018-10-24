import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import WantToRead from './WantToRead'
import CompleteRead from './CompleteRead'
import CurrentlyReading from './CurrentlyReading'

class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <CurrentlyReading />
              <WantToRead />
              <CompleteRead />
            </div>
            <div className="open-search">
              <Link className="search-books" to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks