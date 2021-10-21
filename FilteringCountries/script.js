const results = document.querySelector('.results');
const input = document.querySelector('input');

let countries;
let searchTerm = '';

input.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  showCountries();
 
})


const fetchCountries = async() => {
  countries = await fetch("https://restcountries.com/v2/all")
    .then(res => res.json());
}

const showCountries = async() => {
  await fetchCountries();
  // console.log(countries.filter(c => c.name.includes(searchTerm.toLowerCase())))

  results.innerHTML = (
    countries.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map(country => {
      return `
      <li>${country.name}</li>
      `
    }).join('')
  )
  
}

showCountries();





