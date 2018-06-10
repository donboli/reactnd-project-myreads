import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import Book from './Book';

class BooksSearch extends Component {
  state = {
    query: '',
    searching: false,
    books: []
  }

  searchBooks = () => {
    this.setState({ searching: true })
    BooksAPI.search(this.state.query)
      .then((books) => this.setState({ books, searching: false }))
      .catch(() => this.setState({
        books: [],
        searching: false
      }))
  }

  updateBook = (updatedBook, shelf) => {
    this.setState(prevState => ({
      books: prevState.books
              .filter(book => book.id !== updatedBook.id)
              .concat([{
                ...updatedBook,
                shelf
              }])
    }))
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    }, () => this.searchBooks())
  }

  render() {
    const { books, query, searching } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { books.length === 0 && !searching && 'No books found' }
            { searching && 'Searching for books...' }
            { books.length > 0 && !searching && books.map(book => (
              <Book
                key={book.id}
                book={book}
                afterChange={this.updateBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksSearch