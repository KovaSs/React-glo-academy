import React from 'react';
import {shallow} from 'enzyme';
import BestItem from './bestItem';

describe('Testing <BestItem/>', () => {
  const item = shallow(<BestItem/>);

  it('BestItem has been rendered', () => {
    expect(item).toMatchSnapshot();
  });

});
