import React from 'react'
import { Route } from 'react-router-dom';

import BookSearch from './BookSearch'
import BookShelfList from './BookShelfList'

import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookShelfList} />
        <Route path='/search' component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp
