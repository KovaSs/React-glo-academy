import React from 'react';
import {shallow} from 'enzyme';
import SearchPanel from './searchPanel';

describe('Testing <SearchPanel/>', () => {
  const item = shallow(<SearchPanel/>);

  it('SearchPanel has been rendered', () => {
    expect(item).toMatchSnapshot();
  });

  it('SearchPanel state "term" is empty string', () => {
    expect(item.state().term).toBeString()
  });

});
