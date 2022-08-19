const arr = [1,2,3,4,5]
console.log(arr[0], arr[Math.floor((arr.length-1)/2)], arr[arr.length-1])


let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

itCompanies.forEach(function(item) {
    console.log(item.toUpperCase())
}   )

console.log(itCompanies.splice('')+ ' are big IT companies')

if (itCompanies.includes('Amazon')) {
    console.log('exists')
}
else console.log('doesnt exist')

console.log([8,6,2,4,5,3].sort().reverse())

itCompanies.pop()
console.log(itCompanies)

itCompanies.shift()
console.log(itCompanies)

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(itCompanies.length-3))


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const newText = text.replace(/[^a-zA-Z ]/g, "") 
console.log(newText.split(' ').length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
const index = shoppingCart.indexOf('Honey')
if(index> -1) {
    shoppingCart.splice(index, 1)
    console.log(shoppingCart)
}

const i = shoppingCart.indexOf('Tea')
if(i>-1) {
    shoppingCart[i] = 'Green Tea'
    console.log(shoppingCart)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const sAges = ages.sort()
console.log(sAges[0],sAges[sAges.length-1])

if(sAges.length%2 == 0) {
    console.log((sAges[(sAges.length/2)-1] + sAges[sAges.length/2])/2)
}
else { 
    console.log(sAges[Math.floor(sAges.length/2)])
}

const newArray = []
const average = function(array) {
    sum = 0
    for(i=0;i<array.length;i++) {
        sum+= array[i]
    }
    newArray.push(sum/array.length)
    console.log(sum/array.length)
}
average(ages)
const avr = newArray

console.log('Range is ' + (sAges[sAges.length -1]- sAges[0]))

console.log(Math.abs(sAges[sAges.length-1]-avr), Math.abs(sAges[0]-avr))


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const index1 =countries.indexOf('Ethiopia')
if(index1>-1) {
    console.log(countries[index1].toUpperCase())
}
else {
    countries.push('Ethiopia')}

const i1 = webTechs.indexOf('Sass')
if(i1>-1) {
    console.log('Sass is a CSS preprocess')
}
else {
    webTechs.push('Sass')
    console.log(webTechs)
}

if(countries.length%2 == 0) {
    console.log(countries[Math.floor(countries.length/2)] + countries[Math.ceil(countries.length/2)])
}
else { 
    console.log(countries[Math.floor(countries.length/2)])
}

console.log(countries.slice(0,10))

if(countries.length%2 == 0) {
    const a = countries.slice(0, countries.length/2)
    const b = countries.slice(countries.length/2, countries.length)
    console.log(a,b)
}
else { 
    const a = countries.slice(0, Math.ceil(countries.length/2))
    const b = countries.slice(Math.ceil(countries.length/2), countries.length)
    console.log(a,b)
}