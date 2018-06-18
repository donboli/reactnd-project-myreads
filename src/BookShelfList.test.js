import React from 'react'
import { shallow } from 'enzyme'
import { Link, BrowserRouter, Router } from 'react-router-dom'

import BookShelfList from './BookShelfList'
import BookShelf from './BookShelf'

const books = [
  { id: 'id1', title: 'title1', shelf: 'currentlyReading', hashId: 'i45uhtrnegkjwernrjg' },
  { id: 'id2', title: 'title2', shelf: 'currentlyReading', hashId: 'i45uhtrnegkj234nrjg' },
  { id: 'id3', title: 'title3', shelf: 'wantToRead', hashId: 'i45uhtrnegkjnsdfrjg' },
  { id: 'id4', title: 'title4', shelf: 'wantToRead', hashId: 'i45uhtrnegkj234nrjg' },
  { id: 'id5', title: 'title5', shelf: 'read', hashId: 'i45uhtrn123egkjnrjg' },
  { id: 'id6', title: 'title6', shelf: 'read', hashId: 'i45uhtrnsdf3egkjnrjg' }
]

const fetchBooks = jest.fn()

describe('BookShelfList', function () {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BookShelfList books={[]} fetchBooks={fetchBooks} />)
  })

  it('displays a Link to the search path', () => {
    expect(wrapper.find(Link).length).toBe(1)
  })

  describe('when no books are set', () => {
    it('shows a loading message', () => {
      expect(wrapper.find('.list-books-content').text()).toEqual('Loading Shelves...')
    })
  })

  describe('when books are set', () => {
    beforeEach(() => {
      wrapper = shallow(<BookShelfList books={books} fetchBooks={fetchBooks} />)
    })

    it('renders 3 BookShelfs', () => {
      expect(wrapper.find(BookShelf).length).toBe(3)
    })

    it('passes the books to the right shelves', () => {
      expect(wrapper.find(BookShelf).first().props().books)
        .toEqual(books.filter(book => book.shelf === 'currentlyReading'))

      expect(wrapper.find(BookShelf).at(1).props().books)
        .toEqual(books.filter(book => book.shelf === 'wantToRead'))

      expect(wrapper.find(BookShelf).at(2).props().books)
        .toEqual(books.filter(book => book.shelf === 'read'))
    })
  })
})