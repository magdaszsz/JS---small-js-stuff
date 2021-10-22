const results = document.querySelector(".results");
const input = document.querySelector("input");
const spinner = document.querySelector(".spinner-container");

let countries;
let searchTerm = "";

const hideSpinner = () => {
  spinner.style.display = "none";
};

input.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  showCountries();
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const fetchCountries = async () => {
  countries = await fetch("https://restcountries.com/v2/all").then((res) =>
    res.json()
  );
};

const showCountries = async () => {
  await fetchCountries();
  results.innerHTML = countries
    .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((country) => {
      return `
      <li class="country-card">
      <img src="${country.flag}" alt="${country.name}"/>
      <h3>${country.name}</h3>
      <p>${numberWithCommas(country.population)}</p></li>
      `;
    })
    .join("");
  hideSpinner();
};

showCountries();
