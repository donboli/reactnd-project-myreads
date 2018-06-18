import React from 'react'
import { shallow, mount } from 'enzyme'
import { Link, Router } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import Book from './Book'

const books = [
  { id: 'id1', title: 'title1', shelf: 'currentlyReading', hashId: 'i45uhtrnegkjwernrjg' },
  { id: 'id2', title: 'title2', shelf: 'currentlyReading', hashId: 'i45uhtrnegkj234nrjg' },
  { id: 'id3', title: 'title3', shelf: 'wantToRead', hashId: 'i45uhtrnegkjnsdfrjg' },
  { id: 'id4', title: 'title4', shelf: 'wantToRead', hashId: 'i45uhtrnegkj234nrjg' },
  { id: 'id5', title: 'title5', shelf: 'read', hashId: 'i45uhtrn123egkjnrjg' },
  { id: 'id6', title: 'title6', shelf: 'read', hashId: 'i45uhtrnsdf3egkjnrjg' }
]

jest.mock('./BooksAPI', () => ({
  search: jest.fn(() => Promise.resolve([
    { id: 'id1', title: 'title1', shelf: 'currentlyReading', hashId: 'i45uhtrnegkjwernrjg' },
    { id: 'id2', title: 'title2', shelf: 'currentlyReading', hashId: 'i45uhtrnegkj234nrjg' },
    { id: 'id3', title: 'title3', shelf: 'wantToRead', hashId: 'i45uhtrnegkjnsdfrjg' },
    { id: 'id4', title: 'title4', shelf: 'wantToRead', hashId: 'i45uhtrnegkj234nrjg' },
    { id: 'id5', title: 'title5', shelf: 'read', hashId: 'i45uhtrn123egkjnrjg' },
    { id: 'id6', title: 'title6', shelf: 'read', hashId: 'i45uhtrnsdf3egkjnrjg' }
  ]))
}))

describe('BookSearch', function () {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BookSearch shelfBooks={books} />)
  })

  it('has a link to the root path', () => {
    expect(wrapper.find(Link).props().to).toBe('/')
  })

  it('has a text input', () => {
    expect(wrapper.find('input[type="text"]').length).toBe(1)
  })

  it('shows a message when there are no books', () => {
    expect(wrapper.find('.books-grid').text()).toEqual('No books found')
  })

  describe('on form change', () => {
    it('shows a message while searching for books', () => {
      const input = wrapper.find('input[type="text"]')
      input.simulate('change', { target: { value: 'My new value' } })

      expect(wrapper.find('.books-grid').text()).toEqual('Searching for books...')
    })

    it('calls BooksAPI#search', () => {
      const input = wrapper.find('input[type="text"]')
      input.simulate('change', { target: { value: 'text' } })

      expect(BooksAPI.search).toBeCalled()
    })

    it('shows retrieved books', (done) => {
      const input = wrapper.find('input[type="text"]')
      input.simulate('change', { target: { value: 'text' } })

      process.nextTick(() => {
        wrapper.update()
        expect(wrapper.find(Book).length).toBe(6)
        done()
      })
    })
  })
})