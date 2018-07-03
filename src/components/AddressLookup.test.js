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
  it('initializes the cep in `state` with blank string', () => {
    expect(addressLookup.state().cep).toBe('');
  });
  it('initializes the address in `state` with null', () => {
    expect(addressLookup.state().address).toBeNull();
  });

  describe('when the user types a valid zip code', () => {
    const cep = '02050-010';

    beforeEach(() => {
      addressLookup.find('Input').simulate('change', {
        target: {
          value: cep,
          validity: {},
          setCustomValidity: () => {}
        }
      });
    });
    it('updates the cep in `state` accordingly', () => {
      expect(addressLookup.state().cep).toBe(cep);
    });

    describe('and submits the form', () => {
      beforeEach(() => {
        addressLookup.find('Form').simulate('submit');
      });
      const expectedAddressTemplate = {
        cep: cep,
        logradouro: 'Rua Miguel Mentem',
        complemento: '',
        bairro: 'Vila Guilherme',
        localidade: 'São Paulo',
        uf: 'SP',
        unidade: '',
        ibge: '3550308',
        gia: '1004'
      };
      it('updates the address in `state`', () => {
        expect(addressLookup.state().address).toMatchObject(
          expectedAddressTemplate
        );
      });
      it('calls the supplied renderResult with the current address in `state`', () => {
        expect(mockRenderResult).toHaveBeenCalledWith(
          addressLookup.state().address
        );
      });
    });
  });
});
