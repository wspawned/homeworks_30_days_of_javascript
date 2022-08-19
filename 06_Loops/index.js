for(i=0;i<11;i++) {
    console.log(i)
}

let i = 0
while (i<11) {
    console.log(i)
    i++
}

let i= 0
do {
    console.log(i)
    i++
}
while(i<11)

for(i=10;i>=0;i--) {
    console.log(i)
}

for(i=1;i<8;i++) {
    console.log('#'.repeat(i))
}

for(i=0;i<11;i++) {
    console.log(`${i} * ${i} = ${i * i}` )
}

for(i=0;i<101;i++) {
    if(i%2==0)
    console.log(i)
}

for(i=0;i<101;i++) {
    if(i%2==1)
    console.log(i)
}

let sum = 0
for(i=0;i<101;i++) {   
    sum += i
}
console.log(sum)

const sums = []
let sumEven = 0
let sumOdd = 0
for(i=0;i<101;i++) {   
    if(i%2==0) {
        sumEven+= i
    }
    else sumOdd+=i
}
sums.push(sumEven)
sums.push(sumOdd)
console.log(sums)


const arr = []
for(i=0;i<5;i++) {
    arr.push(Math.floor(Math.random()*10))
}
console.log(arr)

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
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const newArr =[]
for (const country of countries ) {
    newArr.push(country.toUpperCase())
}
console.log(newArr)

const newArr =[]
for (const num of countries ) {
    newArr.push(num.length)
}
console.log(newArr)

const newArr =[]
for (const country of countries ) {
    let listArr = []
    listArr.push(country.toUpperCase())
    listArr.push(country.toUpperCase().substring(0,3))
    listArr.push(country.length)
    newArr.push(listArr)
}
console.log(newArr)

const newArr =[]
const newArr2 = []
for (const country of countries ) {
    if(country.substring(country.length-2) == 'ia') {
        newArr.push(country)
    }
    else if (country.substring(country.length-2) == 'ai') {
        newArr2.push(country)}
}
if (newArr.length>= 1) {
    console.log(newArr)
}
else {console.log(newArr2)}

const newArr =[]
for (const num of countries ) {
    newArr.push(num.length)
}
console.log(newArr.sort()[newArr.length-1])

const newArr =[]
for (const num of countries ) {
    if(num.length == 5)
    newArr.push(num)
}
console.log(newArr)

let word = ''
for (const num of webTechs ) {
    if(num.length> word.length)
    word = num
}
console.log(word)

const arr = []
for(const tech of webTechs) {
    newArr = [tech, tech.length]
    arr.push(newArr)
}
console.log(arr)

const arr = []
for (const first of mernStack) {
    let any = first.slice(0,1)
    arr.push(any)
}
console.log(arr.join(''))

const fruit = ['banana', 'orange', 'mango', 'lemon']
const arr = Array(4)
for (const fr of fruit) {
    arr[(arr.length-1)- (fruit.indexOf(fr))] = fr    
}
console.log(arr)