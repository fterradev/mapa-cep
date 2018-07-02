import React from 'react';
import { shallow } from 'enzyme';
import AddressLookup from './AddressLookup';

describe('Wallet', () => {
  const mockRenderResult = jest.fn();
  const addressLookup = shallow(<AddressLookup renderResult={mockRenderResult} />);

  it('renders properly', () => {
    expect(addressLookup).toMatchSnapshot();
  });
});
