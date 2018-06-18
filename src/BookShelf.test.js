import React from 'react';
import { shallow } from 'enzyme';

import BookShelf from './BookShelf';
import Book from './Book';

const props = {
  title: 'title',
  books: [
    { id: 'id1', title: 'title1', hashId: 'i45uhtrnegkjwernrjg' },
    { id: 'id2', title: 'title2', hashId: 'i45uhtrnegkj234nrjg' },
    { id: 'id3', title: 'title3', hashId: 'i45uhtrnegkjnsdfrjg' },
    { id: 'id4', title: 'title4', hashId: 'i45uhtrnegkj234nrjg' },
    { id: 'id5', title: 'title5', hashId: 'i45uhtrn123egkjnrjg' },
    { id: 'id6', title: 'title6', hashId: 'i45uhtrnsdf3egkjnrjg' }
  ],
  afterBookChange: jest.fn()
}

describe('BookShelf', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <BookShelf
        title={props.title}
        books={props.books}
        afterBookChange={props.afterBookChange}
      />
    )
  })

  it('shows the shelf title', () => {
    expect(wrapper.find('.bookshelf-title').text()).toBe(props.title)
  })

  it('renders all books passed to it', () => {
    expect(wrapper.find(Book).length).toBe(6)
  })
})