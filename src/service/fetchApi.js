const fetchUrl = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data;
};

export default fetchApi;
