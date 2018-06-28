import fetchJsonp from 'fetch-jsonp';

export const lookupLocation = cep =>
  fetchJsonp(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(json => json)
    .catch(ex => console.log('parsing failed', ex));
