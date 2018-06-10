import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import App from './App';
import BookShelfList from './BookShelfList';
import BookSearch from './BookSearch';

jest.mock('./BooksAPI', () => 'BooksAPI')

it('has 2 routes', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Route).length).toBe(2)
});

it('routes to BookShelfList', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Route).first().props().component).toEqual(BookShelfList)
});

it('routes to BookSearch', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Route).last().props().component).toEqual(BookSearch)
});