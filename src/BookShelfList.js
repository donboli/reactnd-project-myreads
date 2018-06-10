import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom';

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
            {shelves.map(shelf => (
              <BookShelf
                title={shelf.title}
                books={books.filter(book => book.shelf === shelf.id)}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelfList
