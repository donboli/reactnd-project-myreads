import React from 'react'
import { shallow } from 'enzyme'
import { Link, BrowserRouter, Router } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import BookShelfList from './BookShelfList'
import BookShelf from './BookShelf'

const books = [
  { id: 'id1', title: 'title1', shelf: 'currentlyReading' },
  { id: 'id2', title: 'title2', shelf: 'currentlyReading' },
  { id: 'id3', title: 'title3', shelf: 'wantToRead' },
  { id: 'id4', title: 'title4', shelf: 'wantToRead' },
  { id: 'id5', title: 'title5', shelf: 'read' },
  { id: 'id6', title: 'title6', shelf: 'read' }
]

jest.mock('./BooksAPI', () => ({
  getAll: jest.fn(() => Promise.resolve([
    { id: 'id1', title: 'title1', shelf: 'currentlyReading' },
    { id: 'id2', title: 'title2', shelf: 'currentlyReading' },
    { id: 'id3', title: 'title3', shelf: 'wantToRead' },
    { id: 'id4', title: 'title4', shelf: 'wantToRead' },
    { id: 'id5', title: 'title5', shelf: 'read' },
    { id: 'id6', title: 'title6', shelf: 'read' }
  ]))
}))

describe('BookShelfList', function () {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BookShelfList />)
  })

  it('calls BooksAPI#getAll on mount', () => {
    expect(BooksAPI.getAll).toBeCalled()
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
      wrapper.update()
    })

    it('renders 3 BookShelfs', () => {
      expect(wrapper.find(BookShelf).length).toBe(3)
    })

    it('passes the books to the right shelves', () => {
      expect(wrapper.find(BookShelf).first().props().books).toEqual([
        { id: 'id1', title: 'title1', shelf: 'currentlyReading' },
        { id: 'id2', title: 'title2', shelf: 'currentlyReading' }
      ])

      expect(wrapper.find(BookShelf).at(1).props().books).toEqual([
        { id: 'id3', title: 'title3', shelf: 'wantToRead' },
        { id: 'id4', title: 'title4', shelf: 'wantToRead' }
      ])

      expect(wrapper.find(BookShelf).at(2).props().books).toEqual([
        { id: 'id5', title: 'title5', shelf: 'read' },
        { id: 'id6', title: 'title6', shelf: 'read' }
      ])
    })
  })
})