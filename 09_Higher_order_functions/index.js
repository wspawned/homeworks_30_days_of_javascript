const countriesData = require ('./countries_data')

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

countries.forEach((country) =>  console.log(country))

const upperCasedCountries = countries.map(country => country.toUpperCase())
console.log(upperCasedCountries)

const squared = numbers.map(num => num*num )
console.log(numbers,squared)

const prices = products.map(item => item.price)
console.log(prices)

const land = countries.filter(country => country.toLowerCase().includes('land'))
console.log(land)

const sixnmore = countries.filter(country => country.length >= 6)
console.log(sixnmore)

const startingE = countries.filter(country => country.startsWith('E'))
console.log(startingE)

const prices2 = products.filter(item => item.price> 0)
console.log(prices2)

const getStringLists = function(arr) {                               
    return arr.filter(item => typeof item === 'string')
}
console.log(getStringLists(numbers))

const sum = numbers.reduce((acc, cur) => acc+cur, 0)
console.log(sum)

const sum2 = countries.reduce((acc, cur) => acc + (cur + ', '), '')
console.log(sum2 + ' are north European countries')

console.log(names.some(n => n.length>7))
console.log(countries.every(c => c.includes('land')))

console.log(countries.find(country => country.length===6))
console.log(countries.findIndex(country => country.length===6))

console.log(countries.findIndex(country => country === 'Norway'))
console.log(countries.findIndex(country => country === 'Russia'))

const sumProducts = products.map((item) => item.price).filter(item => item>0).reduce((acc,cur)=> acc+cur,0)
console.log(sumProducts)

const sumProducts2 = products.reduce((acc,cur) => acc+= Number(cur.price), 0)
console.log(sumProducts2)

const categorizeCountries = function(arr) {
    return arr.filter(c=> c.name.endsWith('stan'))
}
console.log(categorizeCountries(countriesData))

const getFirstTenCountries = countriesData.filter((item, index) => {if(index<10) return item})
console.log(getFirstTenCountries)

const getLastTenCountries = countriesData.filter(item => (countriesData.length-1) - countriesData.indexOf(item)<10)
console.log(getLastTenCountries)

/*Create a function which return an array of objects, which is the letter and
the number of times the letter use to start with a name of a country.*/

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const seperate = characters.split('')
const list = function(arr) {
    const newArr = []
    seperate.forEach( (char) => {
        const count = arr.filter(c => c.name.startsWith(char)).length
        const obje = {char, count}
        newArr.push(obje)
    } )
    return newArr
}
console.log(list(countriesData).filter(item=> item.count>1))

////another way to do
const chars = countriesData.map(w => w.name.charAt(0))
const charsFiltered = chars.filter((item,index)=> {
    if(chars.indexOf(item)== index)
    return item
})
const list2 = function(arr) {
    const newArr = []
    charsFiltered.forEach( (char) => {
        const count = arr.filter(c => c.name.startsWith(char)).length
        const obje = {char, count}
        newArr.push(obje)
    } )
    return newArr
}
console.log(list2(countriesData).filter(item=> item.count>1))

////Use the countries information, in the data folder. Sort countries by name, by capital, by population.

console.log(countriesData.sort((a, b) => {
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0
} ))

console.log(countriesData.sort((a, b) => {
    if(a.capital < b.capital) return -1
    if(a.capital > b.capital) return 1
    return 0
} ))

console.log(countriesData.sort((a, b) => {
    if(a.population < b.population) return -1
    if(a.population > b.population) return 1
    return 0
} ))

////Find the 10 most spoken languages

const arr = []                         
countriesData.map(country => {
  country.languages.forEach(elm =>
    arr.push(elm))
})
const langFiltered = arr.filter((item, index)=> {
  if(arr.indexOf(item)== index)
  return item
})
const newArr = []
for(const lang of langFiltered) { 
  const count = arr.filter(l => l == lang).length
  newArr.push({language: lang, count: count})
}
console.log(newArr.sort((a,b)=> b.count-a.count).slice(0,10))

////ten most populated countries

const popSorted = countriesData.sort((a, b) => {
    if(a.population < b.population) return 1
    if(a.population > b.population) return -1
    return 0
} )
console.log(popSorted.filter(item => popSorted.indexOf(item)<10))
