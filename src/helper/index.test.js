import { lookupLocation } from './index';

const cep = '02050-010';
const location = lookupLocation(cep);

it('gets a location from a zip code', () => {
  console.log(location);
  expect(location.cep).toEqual(cep);
})
