import React from 'react';
import { shallow } from 'enzyme';

import * as BooksAPI from './BooksAPI'
import Book from './Book';

jest.mock('./BooksAPI', () => ({
  update: jest.fn(() => Promise.resolve())
}))

const bookProps = {
  imageLinks: {
    smallThumbnail: 'someURL'
  },
  title: 'title',
  authors: ['author1', 'author2'],
  shelf: 'currentlyReading'
}

const props = {
  book: bookProps,
  afterChange: jest.fn()
}

describe('Book', function () {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Book book={props.book} afterChange={props.afterChange} />)
  })

  it('shows the book cover', () => {
    expect(
      wrapper
        .find('.book-cover')
        .props()
        .style
        .backgroundImage
    ).toContain(bookProps.imageLinks.smallThumbnail)
  })

  it('shows the title', () => {
    expect(
      wrapper
        .find('.book-title')
        .text()
    ).toEqual(bookProps.title)
  })

  it('shows the authors', () => {
    expect(
      wrapper
        .find('.book-authors')
        .text()
    ).toEqual(bookProps.authors.join(', '))
  })

  describe('shelf selection', () => {
    it('has a select input', () => {
      expect(wrapper.find('select').length).toBe(1)
    })

    it('has 4 shelf options', () => {
      expect(
        wrapper
          .find('select option')
          .not('[disabled]')
          .length
      ).toBe(4)
    })

    it('calls the BooksAPI on change', () => {
      wrapper
        .find('select')
        .simulate('change', { target: { value : 'read' }})

      expect(BooksAPI.update.mock.calls.length).toBe(1)
    })

    it('calls the afterChange function after a successful update', () => {
      expect(props.afterChange).toBeCalledWith(props.book, 'read')

      wrapper
        .find('select')
        .simulate('change', { target: { value : 'read' }})
    })
  })
})