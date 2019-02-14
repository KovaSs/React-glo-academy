import React from 'react';
import {shallow} from 'enzyme';
import FilterPanel from './filterPanel';

describe('Testing <FilterPanel/>', () => {
  const item = shallow(<FilterPanel/>);

  it('FilterPanel has been rendered', () => {
    expect(item).toMatchSnapshot();
  });

});
