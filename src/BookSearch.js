import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import Book from './Book';

class BooksSearch extends Component {
  state = {
    query: '',
    books: []
  }

  searchBooks = () => {
    BooksAPI.search(this.state.query)
      .then((books) => {
        this.setState({ books })
      })
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    }, () => this.searchBooks())
  }

  render() {
    const { books, query } = this.state

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
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                afterChange={this.searchBooks} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksSearch