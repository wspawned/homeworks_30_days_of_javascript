import fetch from "node-fetch"

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

let read
const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        read = await response.json()
        return read
    } catch (err) {
        console.error(err)                    
    }
}
console.log('===== async and await')


await fetchData(countriesAPI)
for( const {name, capital, languages, population, area} of read) {
    console.log(name, capital, languages, population, area)
}

//////////level2

await fetchData(catsAPI)
let catsName = []
for( const {name} of read) {
    catsName.push(name)
}
console.log(catsName)

/////////level3

const arr = []
await fetchData(catsAPI)
for ( const {weight} of read) {
    arr.push( (Number(weight.metric.split('-')[0]) + Number(weight.metric.split('-')[1]) / 2) )
}
let sum = 0
for( const w of arr) {
    sum+= w
}
const avrCatWeightMetric = sum/arr.length
console.log(avrCatWeightMetric)


const newArr = []
const undefArea = []
await fetchData(countriesAPI)
for (const {name, area} of read) {
    if(area != undefined)
    newArr.push({name, area})
    else undefArea.push({name, area})
}
const tenLargest = newArr.sort((a, b) => {return b.area - a.area}).slice(0,10)
console.log(tenLargest)


await fetchData(countriesAPI)
const langArr = []
for (const {languages} of read) {
    languages.forEach(element => {
        langArr.push(element.name)
    });
}
const setOfLanguages = new Set(langArr)
console.log(setOfLanguages.size + ' languages are used as official in the world')

