// react libraries
import * as React from 'react';

// components
import App from '..';

// third party libraries
import { mount, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';

// fixtures
import { articles } from '../fixtures';

configure({ adapter: new Adapter() });

const store = configureStore([thunk])({
  articles: {
    articles
  }
});

describe('Tests for App functionality', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />>
      </Provider>
  );
  const app = wrapper.find(App);

  it('should match app snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should swtich to cards option view and cards', () => {
    const cardsSwitch = app.find('.options__cards')

    cardsSwitch.simulate('click');
    expect(cardsSwitch.length).toEqual(1);
  });

  it('should switch to tabular view', () => {
    const tableSwitch = app.find('.options__table')

    tableSwitch.simulate('click');
    expect(tableSwitch.length).toEqual(1);
  });

  it('should mark an article as read', () => {
    const markAsReadButton = app.find('.read-btn__btn').first();

    markAsReadButton.simulate('click');
  });

  it('should delete an article', () => {
    const deleteBtn = app.find('.delete-btn__icon').first();

    deleteBtn.simulate('click');
  });

  it('should search for an article', () => {
    const searchBox = app.find('.search-box__input');
    searchBox.simulate('change', {
      target: {
        value: 'Sample text'
      }
    });
  });
});
