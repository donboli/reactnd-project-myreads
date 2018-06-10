import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class BookShelfList extends Component {
  state = {
    books: []
  }

  shelves = [
    { id: 'currentlyReading', title: 'Current Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read' }
  ]

  fetchBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books
        })
      })
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    const { books } = this.state

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {!books.length && 'Loading Shelves...' }
            {books.length > 0 &&
              this.shelves.map(shelf => (
                <BookShelf
                  key={shelf.id}
                  title={shelf.title}
                  books={books.filter(book => book.shelf === shelf.id)}
                  afterBookChange={this.fetchBooks}
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

export default BookShelfList
