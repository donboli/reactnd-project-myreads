import React from 'react';
import { shallow } from 'enzyme';

import * as BooksAPI from './BooksAPI'
import Book from './Book';

jest.mock('./BooksAPI', () => 'BooksAPI')

describe('Book', function () {
  it('shows the book cover', () => {
    pending()
  })

  it('shows the title', () => {
    pending()
  })

  it('shows the authors', () => {
    pending()
  })

  describe('shelf selection', () => {
    it('has a select input', () => {
      pending()
    })

    it('has 4 shelf options', () => {
      pending()
    })

    it('calls the BookAPI on change', () => {
      pending()
    })

    it('calls the afterChange function after a successful update', () => {
      pending()
    })
  })
})