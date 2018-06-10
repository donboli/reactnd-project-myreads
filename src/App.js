import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import BookShelfList from './BookShelfList'
import { Route } from 'react-router-dom';
import './App.css'

const shelves = [
  { id: 'currentlyReading', title: 'Current Reading' },
  { id: 'wantToRead', title: 'Want to Read' },
  { id: 'read', title: 'Read' }
]

class BooksApp extends React.Component {
  state = {
    books: []
  }

  fetchBooks() {
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

  handleBookChange = (changedBook) => {
    BooksAPI.update(changedBook, changedBook.shelf)
      .then(() => {
        this.fetchBooks()
      })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelfList
            shelves={shelves}
            books={books}
            onBookChange={this.handleBookChange}
          />
        )} />
        <Route path='/search' component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp
