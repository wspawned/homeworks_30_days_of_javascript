const countriesData = require('./countries_data')

const countries = ['Finland', 'Sweden', 'Norway']

const nSet = new Set()

for(i=0;i<11;i++) {
        nSet.add(i)
    }
console.log(nSet)

nSet.delete(5)
nSet.clear()
console.log(nSet)

const arrStr = ['it','is','the','string','array']
const sSet = new Set(arrStr)
console.log(sSet)

//// Create a map of countries and number of characters of a country

const mapped = countries.map(country => [country, country.length])
console.log(mapped)

//// Create an object of countries and number of characters of a country

const emptyObject = {}
countries.forEach(country => Object.assign(emptyObject, {[country] : country.length}))
console.log(emptyObject)

//// another way to do
const emptyObject2 = {}
countries.forEach(country => emptyObject2[country] = country.length)
console.log(emptyObject2)

//// Find a union b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]
const union = new Set(c)
console.log(union)

//// Find a intersection b

const B = new Set(b)
const d = a.filter((num) => B.has(num))
const intersection = new Set(d)
console.log(intersection)

//// How many languages are there in the countries object file

const arr = []
countriesData.map(item => {
    item.languages.forEach(elm => arr.push(elm))
})
const allLangs = new Set(arr)
console.log(allLangs.size)

//// Use the countries data to find the 10 most spoken languages

const newArr = []
for(const lang of allLangs) {
    const count = arr.filter(item => item == lang).length
    newArr.push({Lang: lang , Count : count})
}
const sorted = newArr.sort((a,b) => {
    if(a.Count< b.Count) return 1
    if(a.Count> b.Count) return -1
    return 0
}  )
console.log(sorted.filter(item => sorted.indexOf(item)<10))