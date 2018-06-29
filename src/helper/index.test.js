import { lookupLocation } from './index';

describe('lookupLocation', () => {
  const cep = '02050-010';
  const expectedLocation = {
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
    it('finds the location', () => {
      return expect(lookupLocation(cep)).resolves.toMatchObject(
        expectedLocation
      );
    });
  });
});
