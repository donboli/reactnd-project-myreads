import React from 'react';
import { shallow } from 'enzyme';

import * as BooksAPI from './BooksAPI'
import BookShelfList from './BookShelfList';

const books = [
  { id: 'id1', title: 'title1', shelf: 'currentlyReading' },
  { id: 'id2', title: 'title2', shelf: 'currentlyReading' },
  { id: 'id3', title: 'title3', shelf: 'wantToRead' },
  { id: 'id4', title: 'title4', shelf: 'wantToRead' },
  { id: 'id5', title: 'title5', shelf: 'read' },
  { id: 'id6', title: 'title6', shelf: 'read' }
]

jest.mock('./BooksAPI', () => ({
  getAll: jest.fn(() => Promise.resolve(books))
}))

describe('BookShelfList', function () {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BookShelfList />)
  })

  it('calls BooksAPI#getAll on mount', () => {
    pending()
  })

  it('displays a Link to the search path', () => {
    pending()
  })

  describe('when no books are set', () => {
    it('shows a loading message', () => {
      pending()
    })
  })

  describe('when books are set', () => {
    it('renders 3 BookShelfs', () => {
      pending()
    })

    it('passes the books to the right shelves', () => {
      pending()
    })
  })
})