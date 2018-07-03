const viaCepUrlPat = /https\:\/\/viacep.com.br\/ws\/(.+)\/json\/?/;
const viaCepAddressTemplate = {
  cep: '02050-010',
  logradouro: 'Rua Miguel Mentem',
  complemento: '',
  bairro: 'Vila Guilherme',
  localidade: 'São Paulo',
  uf: 'SP',
  unidade: '',
  ibge: '3550308',
  gia: '1004'
};
const viaCepMockResponse = {
  json: () => viaCepAddressTemplate
};

const fetchJsonp = url =>
  new Promise((resolve, reject) => {
    const matched = viaCepUrlPat.exec(url);
    if (matched.length >= 2) {
      const cep = matched[1];
      viaCepAddressTemplate.cep = cep;
      resolve(viaCepMockResponse);
    } else {
      reject('Unknown URL');
    }
  });

export default fetchJsonp;
