import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookShelfList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title={'Current Reading'}/>
            <BookShelf title={'Want to Read'}/>
            <BookShelf title={'Read'}/>
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
