import { lookupAddress } from './index';

describe('lookupAddress', () => {
  const cep = '02050-010';
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

  describe('given a valid zip code', () => {
    it('finds the corresponding address', () => {
      return expect(lookupAddress(cep)).resolves.toMatchObject(
        expectedAddressTemplate
      );
    });
  });
});
