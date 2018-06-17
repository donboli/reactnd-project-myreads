import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Book from './Book';

class BookShelf extends Component {
  render() {
    const { title, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.hashId}
                book={book}
                afterChange={this.props.afterBookChange} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      hashId: PropTypes.string.isRequired
    })
  ),
  afterBookChange: PropTypes.func.isRequired
}

export default BookShelf
