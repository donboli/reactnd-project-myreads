import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf'

class BookShelfList extends Component {
  shelves = [
    { id: 'currentlyReading', title: 'Current Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read' }
  ]

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, fetchBooks } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {!books.length
            ? 'Loading Shelves...'
            : this.shelves.map(shelf => (
              <BookShelf
                key={shelf.id}
                title={shelf.title}
                books={books.filter(book => book.shelf === shelf.id)}
                afterBookChange={fetchBooks}
              />
            ))
          }
        </div>
        <div className="open-search">
          <Link to='search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelfList
