import fetchJsonp from 'fetch-jsonp';

export const lookupLocation = cep => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  return fetchJsonp(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        throw 'CEP inexistente'; // eslint-disable-line no-throw-literal
      }
      return data;
    })
    .catch(reason => {
      throw 'CEP inválido'; // eslint-disable-line no-throw-literal
    });
};
