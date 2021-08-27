const currencyOne = document.querySelector("#currency-one .country-code");
const inputOne = document.querySelector("#currency-one input");
const currencyTwo = document.querySelector("#currency-two .country-code");
const inputTwo = document.querySelector("#currency-two input");
const rate = document.querySelector(".currency #rate");

async function calculate() {
  const firstCountryCode = currencyOne.value;
  const secondCountryCode = currencyTwo.value;

  const getData = await fetch(
    `https://v6.exchangerate-api.com/v6/83ab944c75ffc3e064e5c850/latest/${firstCountryCode}`
  );
  const response = await getData.json();
  const value = await response.conversion_rates[secondCountryCode];
  rate.innerHTML = `1 ${firstCountryCode} = ${value} ${secondCountryCode} `;

  inputTwo.value = (inputOne.value * value).toFixed(2);
}

calculate();
currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
inputOne.addEventListener("input", calculate);
inputTwo.addEventListener("input", calculate);
