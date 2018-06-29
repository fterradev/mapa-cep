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
      if (typeof reason === 'string') {
        return reason;
      }
      if (reason.message.match(/failed *$/)) {
        return 'Formato inválido de CEP (deve conter 8 dígitos)';
      }
      if (reason.message.match(/timed out *$/)) {
        return 'O serviço de CEP demorou muito para responder';
      }
      if (process.env.NODE_ENV !== 'production') {
        return reason;
      } else {
        return 'Erro desconhecido no acesso ao serviço de CEP';
      }
    });
};
