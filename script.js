// Solution 1
/*
  FOREACH 
: Iterate an array elements. We use forEach only with arrays. 
 It takes a callback function with elements, index parameter and array itself.

 arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
  })

  MAP
 Iterate an array elements and modify the array elements. 
  It takes a callback function with elements, index , array parameter and return a new array.

  const modifiedArray = arr.map(function (element, index, arr) {
    return element
  })

  FILTER
   Filter out items which full fill filtering conditions and return a new array.

  const countriesContainingLand = countries.filter((country) =>
   country.includes('land')
  )
  console.log(countriesContainingLand)

  REDUCE
  Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. 
  It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. 
  If our array is an empty array, then Javascript will throw an error.

  arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
   return 
  }, initialValue)
  
  */

// SOLUTION 2 , 3, 4 , 5
const forEachcountries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const forEachnames = ["Asabeneh", "Mathias", "Elias", "Brook"];
const forEachnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//3
forEachcountries.forEach((country) => console.log(country));

// 4
forEachnames.forEach((name) => console.log(name));

//5
forEachnumbers.forEach((number) => console.log(number));

// SOLUTION 6, 7, 8, 9, 10
const mapcountries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
const mapnames = ["Asabeneh", "Mathias", "Elias", "Brook"];
const mapnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapproducts = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//6
const mapCountry = mapcountries.map((country) => country.toUpperCase());
console.log(mapCountry);

//7
const mapcountriesLength = mapcountries.map((country) => country.length);
console.log(mapcountriesLength);

//8
const mapName = mapnames.map((name) => name);
console.log(mapName);

//9
const mapNumber = mapnumbers.map((number) => number);
console.log(mapNumber);

//10
const mapCorrespondingPrice = mapproducts.map(
  (product) => `prices: ${product.price}`
);
console.log(mapCorrespondingPrice);

//  SOLUTION 11, 12, 13, 14, 15
const filtercountries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
  "England",
];
const filternames = ["Asabeneh", "Mathias", "Elias", "Brook"];
const filternumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterproducts = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 11
const filterCountry = filtercountries.filter((country) =>
  country.endsWith("land")
);
console.log(filterCountry);

// 12
const countryWithSixChars = filtercountries.filter(
  (country) => country.length === 6
);

console.log(countryWithSixChars);

// 13
const countryGreaterThanSix = filtercountries.filter(
  (country) => country.length > 6
);

console.log(countryGreaterThanSix);

// 14
const countrystartwithE = filtercountries.filter((country) =>
  country.startsWith("E")
);
console.log(countrystartwithE);

// 15
const onlyPrices = filterproducts.filter((product) => product.price > 0);
console.log(onlyPrices);

// Solution 16
function getStringList(arr) {
  let arrlist = arr.filter((element) => typeof element === "string");
  console.log(arrlist);
}

getStringList([2, "orange", true, undefined, null, "string", "anotherString"]);

// Solution 17
const sumNumber = [1, 2, 3, 6].reduce((acc, cur) => acc + cur);
console.log(sumNumber);

// Solution 18
const countriesJoin = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
].reduce((acc, country) => console.log(country));

/* 
  const ret = countriesJoin.reduce((acc, country) =>  { 
    return acc  +"," +  country
    console.log(overall)
   let sentence = overall.split(' ').join();
  
    return `${sentence} are north european countries`
    });
  console.log(ret) */

//   const reta = countriesJoin.reduce((acc, country) =>  {
//       let guide = acc.push(country)

//       console.log(last)
//       return acc
//     }, []);
//   console.log(reta)

// Solution 19
/* SOME == if any of the variable fulfills the condition */
/* Every == All varaiable must fulfil the condition */

// Solution 20
const checkName = filternames.some((name) => name.length > 7);
console.log(checkName);

// Solution 21
const checkWord = filtercountries.every((country) => country.includes("land"));
console.log(checkWord);

// Solution 23
const firstCountry = filtercountries.find((country) => country.length === 6);
console.log(firstCountry);

// Solution 24
const IndexFirstCountry = filtercountries.findIndex(
  (country) => country.length === 6
);
console.log(IndexFirstCountry, filtercountries[IndexFirstCountry]);

// Solution 25
const findCountry = filtercountries.findIndex(
  (country) => country === "Norway"
);
console.log(findCountry);

// Solution 26
const findCountry2 = filtercountries.findIndex(
  (country) => country === "Russia"
);
console.log(findCountry2);

console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("Solution Exercise 2====================");

// Solution 1
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const totalPrice = products
  .map((val) => val.price)
  .filter((product) => product > 0)
  .reduce((acc, cur) => acc + cur);
console.log(totalPrice);

// Solution 2

const sumPrice = products.reduce((acc, cur) => {
  let price = cur.price;
  return Number(price + acc);
}, 0);
console.log(sumPrice);

// Solution 3
function categorizeCountries(arr) {
  return arr.filter((country) => country.endsWith("land"));
}

console.log(categorizeCountries(["island", "japan", "nedetherland", "poland"]));

// Solution 4
const countryObj = [
  {
    name: "South Sudan",
    capital: "Juba",
    languages: ["English"],
    population: 12131000,
    flag: "https://restcountries.eu/data/ssd.svg",
    currency: "South Sudanese pound",
  },
  {
    name: "Spain",
    capital: "Madrid",
    languages: ["Spanish"],
    population: 46438422,
    flag: "https://restcountries.eu/data/esp.svg",
    currency: "Euro",
  },
  {
    name: "Sri Lanka",
    capital: "Colombo",
    languages: ["Sinhalese", "Tamil"],
    population: 20966000,
    flag: "https://restcountries.eu/data/lka.svg",
    currency: "Sri Lankan rupee",
  },
  {
    name: "Sudan",
    capital: "Khartoum",
    languages: ["Arabic", "English"],
    population: 39598700,
    flag: "https://restcountries.eu/data/sdn.svg",
    currency: "Sudanese pound",
  },
  {
    name: "Suriname",
    capital: "Paramaribo",
    languages: ["Dutch"],
    population: 541638,
    flag: "https://restcountries.eu/data/sur.svg",
    currency: "Surinamese dollar",
  },
  {
    name: "Svalbard and Jan Mayen",
    capital: "Longyearbyen",
    languages: ["Norwegian"],
    population: 2562,
    flag: "https://restcountries.eu/data/sjm.svg",
    currency: "Norwegian krone",
  },
  {
    name: "Swaziland",
    capital: "Lobamba",
    languages: ["English", "Swati"],
    population: 1132657,
    flag: "https://restcountries.eu/data/swz.svg",
    currency: "Swazi lilangeni",
  },
  {
    name: "Sweden",
    capital: "Stockholm",
    languages: ["Swedish"],
    population: 9894888,
    flag: "https://restcountries.eu/data/swe.svg",
    currency: "Swedish krona",
  },
  {
    name: "Switzerland",
    capital: "Bern",
    languages: ["German", "French", "Italian"],
    population: 8341600,
    flag: "https://restcountries.eu/data/che.svg",
    currency: "Swiss franc",
  },
  {
    name: "Syrian Arab Republic",
    capital: "Damascus",
    languages: ["Arabic"],
    population: 18564000,
    flag: "https://restcountries.eu/data/syr.svg",
    currency: "Syrian pound",
  },
  {
    name: "Taiwan",
    capital: "Taipei",
    languages: ["Chinese"],
    population: 23503349,
    flag: "https://restcountries.eu/data/twn.svg",
    currency: "New Taiwan dollar",
  },
  {
    name: "Tajikistan",
    capital: "Dushanbe",
    languages: ["Tajik", "Russian"],
    population: 8593600,
    flag: "https://restcountries.eu/data/tjk.svg",
    currency: "Tajikistani somoni",
  },
  {
    name: "Tanzania, United Republic of",
    capital: "Dodoma",
    languages: ["Swahili", "English"],
    population: 55155000,
    flag: "https://restcountries.eu/data/tza.svg",
    currency: "Tanzanian shilling",
  },
  {
    name: "Thailand",
    capital: "Bangkok",
    languages: ["Thai"],
    population: 65327652,
    flag: "https://restcountries.eu/data/tha.svg",
    currency: "Thai baht",
  },
  {
    name: "Timor-Leste",
    capital: "Dili",
    languages: ["Portuguese"],
    population: 1167242,
    flag: "https://restcountries.eu/data/tls.svg",
    currency: "United States dollar",
  },
  {
    name: "Togo",
    capital: "Lomé",
    languages: ["French"],
    population: 7143000,
    flag: "https://restcountries.eu/data/tgo.svg",
    currency: "West African CFA franc",
  },
  {
    name: "Tokelau",
    capital: "Fakaofo",
    languages: ["English"],
    population: 1411,
    flag: "https://restcountries.eu/data/tkl.svg",
    currency: "New Zealand dollar",
  },
  {
    name: "Tonga",
    capital: "Nuku'alofa",
    languages: ["English", "Tonga (Tonga Islands)"],
    population: 103252,
    flag: "https://restcountries.eu/data/ton.svg",
    currency: "Tongan paʻanga",
  },
  {
    name: "Trinidad and Tobago",
    capital: "Port of Spain",
    languages: ["English"],
    population: 1349667,
    flag: "https://restcountries.eu/data/tto.svg",
    currency: "Trinidad and Tobago dollar",
  },
  {
    name: "Tunisia",
    capital: "Tunis",
    languages: ["Arabic"],
    population: 11154400,
    flag: "https://restcountries.eu/data/tun.svg",
    currency: "Tunisian dinar",
  },
  {
    name: "Turkey",
    capital: "Ankara",
    languages: ["Turkish"],
    population: 78741053,
    flag: "https://restcountries.eu/data/tur.svg",
    currency: "Turkish lira",
  },
  {
    name: "Turkmenistan",
    capital: "Ashgabat",
    languages: ["Turkmen", "Russian"],
    population: 4751120,
    flag: "https://restcountries.eu/data/tkm.svg",
    currency: "Turkmenistan manat",
  },
  {
    name: "Turks and Caicos Islands",
    capital: "Cockburn Town",
    languages: ["English"],
    population: 31458,
    flag: "https://restcountries.eu/data/tca.svg",
    currency: "United States dollar",
  },
  {
    name: "Tuvalu",
    capital: "Funafuti",
    languages: ["English"],
    population: 10640,
    flag: "https://restcountries.eu/data/tuv.svg",
    currency: "Australian dollar",
  },
  {
    name: "Uganda",
    capital: "Kampala",
    languages: ["English", "Swahili"],
    population: 33860700,
    flag: "https://restcountries.eu/data/uga.svg",
    currency: "Ugandan shilling",
  },
  {
    name: "Ukraine",
    capital: "Kiev",
    languages: ["Ukrainian"],
    population: 42692393,
    flag: "https://restcountries.eu/data/ukr.svg",
    currency: "Ukrainian hryvnia",
  },
  {
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    languages: ["Arabic"],
    population: 9856000,
    flag: "https://restcountries.eu/data/are.svg",
    currency: "United Arab Emirates dirham",
  },
];
function arrReturns(arr) {}

// Solution 5
function first5Country(arr) {
  let countryarr = arr.slice(0, 5).map((country) => country.name);
  console.log(countryarr);
}

first5Country(countryObj);

// Solution 6
function last5country(arr) {
  let countryarr = arr.slice(-5).map((country) => country.name);
  console.log(countryarr);
}

last5country(countryObj);

console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("Solution Exercise 3 ====================");

// Solution 1
let countrySort = countryObj.slice();
countryObj.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(countrySort);

// Solution 2 === not complete yet
function mostSpokenLanguage(arr) {
  let result = {};
  let languageCount = arr.map((val) => val.languages).join();
  let count = languageCount.split(" ");
  console.log(count, "**********");
}

mostSpokenLanguage(countryObj);

///// Pattern 2
// let newCountry = countries.slice();

// let counts = [];
// let count = {};

// function latest(newCount) {
//   for (coun of newCount) {
//     let filteredCountry = countries.filter(
//       (country) => country.languages === coun.languages
//     );
//     counts.push({ country: coun.languages, counters: filteredCountry.length });
//   }
//   return counts;
// }

// console.log(latest(newCountry));

//***********Pattern 1 */
function countryCheck(countrys, n) {
  let counter = {};
  let count = [];
  let arr = [];
  let newArray = countrys.slice();
  for (let cnt of newArray) {
    arr.push(...cnt.languages);
    const filtered = countrys
      .flatMap((country) => country.languages)
      .filter((country) => country);

    count.push({ country: cnt.languages });
  }
  //   console.log(count);
  console.log(arr);
}

countryCheck(countries, 2);
