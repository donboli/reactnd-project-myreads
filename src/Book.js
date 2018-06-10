import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as BooksAPI from './BooksAPI'

class Book extends Component {
  handleChange = (event) => {
    const newShelf = event.target.value
    BooksAPI
      .update(this.props.book, newShelf)
      .then(() => {
        this.props.afterChange(this.props.book, newShelf)
      })
  }

  render() {
    const { book } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select
                value={book.shelf}
                onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string)
  }),
  afterChange: PropTypes.func.isRequired
}

export default Book