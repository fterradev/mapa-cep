import React from 'react';
import { shallow } from 'enzyme';
import LocationLookup from './LocationLookup';

describe('Wallet', () => {
  const locationLookup = shallow(<LocationLookup />);

  it('renders properly', () => {
    expect(locationLookup).toMatchSnapshot();
  });
});
