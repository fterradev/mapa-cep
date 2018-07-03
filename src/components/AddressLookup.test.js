import React from 'react';
import { shallow } from 'enzyme';
import AddressLookup from './AddressLookup';

describe('AddressLookup', () => {
  const mockRenderResult = jest.fn();
  const addressLookup = shallow(
    <AddressLookup renderResult={mockRenderResult} />
  );

  it('renders properly', () => {
    expect(addressLookup).toMatchSnapshot();
  });

  describe('when the user submits a valid zip code', () => {
    const cep = '02050-010';

    beforeEach(() => {
      addressLookup.find('Input').simulate('change', {
        target: {
          value: cep,
          validity: {},
          setCustomValidity: () => {}
        }
      });
      addressLookup.find('Form').simulate('submit');
    });
    const findLocationSpy = jest.spyOn(
      addressLookup.instance(),
      'findLocation'
    );
    it('calls `this.findLocation`', () => {
      expect(findLocationSpy).toHaveBeenCalled();
    });
  });
});
