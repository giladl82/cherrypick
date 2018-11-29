import React from 'react';
import { shallow } from 'enzyme';

import Cherry from './';

describe('Cherry', () => {
  it('Should render Cherry', () => {
    const wrapper = shallow(<Cherry cherryType="Rainier" />);

    expect(wrapper.find('h1').length).toBe(1);
  });
});
