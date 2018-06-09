import React, { Component } from 'react'
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
            {shelves.map(shelf => (
              <BookShelf
                title={shelf.title}
                books={books.filter(book => book.shelf === shelf.id)}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <a>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BookShelfList
