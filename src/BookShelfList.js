import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'

class BookShelfList extends Component {
  render() {
    const { shelves, books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {!books.length && 'Loading Shelves...' }
            {books.length > 0 &&
              shelves.map(shelf => (
                <BookShelf
                  key={shelf.id}
                  title={shelf.title}
                  books={books.filter(book => book.shelf === shelf.id)}
                  onBookChange={this.props.onBookChange}
                />
              ))
            }
          </div>
        </div>
        <div className="open-search">
          <Link to='search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  books: PropTypes.arrayOf(PropTypes.shape({
    shelf: PropTypes.string.isRequired
  })),
  onBookChange: PropTypes.func.isRequired
}

export default BookShelfList
