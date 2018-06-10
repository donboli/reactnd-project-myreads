import React from 'react';
import { shallow } from 'enzyme';

import * as BooksAPI from './BooksAPI'
import Book from './Book';

jest.mock('./BooksAPI', () => 'BooksAPI')

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
  it('shows the book cover', () => {
    const wrapper = shallow(<Book book={props.book} afterChange={props.afterChange} />)
    expect(
      wrapper
        .find('.book-cover')
        .props()
        .style
        .backgroundImage
    ).toContain(bookProps.imageLinks.smallThumbnail)
  })

  it('shows the title', () => {
    const wrapper = shallow(<Book book={props.book} afterChange={props.afterChange} />)
    expect(
      wrapper
        .find('.book-title')
        .text()
    ).toEqual(bookProps.title)
  })

  it('shows the authors', () => {
    const wrapper = shallow(<Book book={props.book} afterChange={props.afterChange} />)
    expect(
      wrapper
        .find('.book-authors')
        .text()
    ).toEqual(bookProps.authors.join(', '))
  })

  describe('shelf selection', () => {
    it('has a select input', () => {
      const wrapper = shallow(<Book book={props.book} afterChange={props.afterChange} />)
      expect(wrapper.find('select').length).toBe(1)
    })

    it('has 4 shelf options', () => {
      const wrapper = shallow(<Book book={props.book} afterChange={props.afterChange} />)
      expect(
        wrapper
          .find('select option')
          .not('[disabled]')
          .length
      ).toBe(4)
    })

    it('calls the BooksAPI on change', () => {
      pending()
    })

    it('calls the afterChange function after a successful update', () => {
      pending()
    })
  })
})