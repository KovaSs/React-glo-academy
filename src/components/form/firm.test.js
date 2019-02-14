import React from 'react';
import {shallow} from 'enzyme';
import FormBase from './form';

describe('Testing <FormBase/>', () => {
  const item = shallow(<FormBase/>);

  it('FormBase has been rendered', () => {
    expect(item).toMatchSnapshot();
  });

  it('FormBase state "loading" is false', () => {
    expect(item.state().loading).toBeFalse()
  });

  it('FormBase state "error" is false', () => {
    expect(item.state().error).toBeFalse()
  });

});
