/* eslint-disable no-throw-literal */
import fetchJsonp from 'fetch-jsonp';

export const lookupAddress = cep => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  return fetchJsonp(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        throw 'CEP inexistente';
      }
      return data;
    })
    .catch(reason => {
      if (typeof reason === 'string') {
        throw reason;
      }
      if (reason.message.match(/failed *$/)) {
        throw 'Formato inválido de CEP (deve conter 8 dígitos)';
      }
      if (reason.message.match(/timed out *$/)) {
        throw 'O serviço de CEP demorou muito para responder';
      }
      if (process.env.NODE_ENV !== 'production') {
        throw reason;
      } else {
        throw 'Erro desconhecido no acesso ao serviço de CEP';
      }
    });
};
