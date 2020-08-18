function getCountry(name) {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  return fetch(url)
    .then(data => data.json())
    .catch(error => console.log(error));
}
export default getCountry;
