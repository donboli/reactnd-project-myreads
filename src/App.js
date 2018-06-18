import React from 'react'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import BookShelfList from './BookShelfList'

import './App.css'

class BooksApp extends React.Component {
  state = {
    shelfBooks: []
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then((shelfBooks) => {
        this.setState({
          shelfBooks: shelfBooks
        })
      })
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    const { shelfBooks } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => {
          return <BookShelfList books={shelfBooks} fetchBooks={this.fetchBooks}/>
        }} />
        <Route path='/search' render={() => {
          return <BookSearch shelfBooks={shelfBooks} />
        }} />
      </div>
    )
  }
}

export default BooksApp
