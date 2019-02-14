import React from 'react';
import {shallow} from 'enzyme';
import ShopItem from './shopItem';

describe('Testing <ShopItem/>', () => {
  const item = shallow(<ShopItem/>);

  it('ShopItem has been rendered', () => {
    expect(item).toMatchSnapshot();
  });

});
