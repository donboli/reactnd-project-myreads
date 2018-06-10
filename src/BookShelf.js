import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book';

class BookShelf extends Component {
  handleChange = (changedBook) => {
    this.props.onBookChange(changedBook)
  }

  render() {
    const { title, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                onChange={this.handleChange} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  book: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
}

export default BookShelf
