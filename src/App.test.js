import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import App from './App';
import BookShelfList from './BookShelfList';
import BookSearch from './BookSearch';

jest.mock('./BooksAPI', () => ({
  getAll: jest.fn(() => Promise.resolve([]))
}))

describe('App', function () {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('calls BooksAPI#getAll on mount', () => {
    expect(BooksAPI.getAll).toBeCalled()
  })

  it('has 2 routes', () => {
    expect(wrapper.find(Route).length).toBe(2)
  });

  it('routes to BookShelfList', () => {
    expect(wrapper.find(Route).first().props().path).toEqual('/')
  });

  it('routes to BookSearch', () => {
    expect(wrapper.find(Route).last().props().path).toEqual('/search')
  });
});