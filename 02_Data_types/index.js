let challenge = '30 days of JavaScript'
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3, challenge.length-1))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.indexOf('J'))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'), challenge.lastIndexOf('a'))

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because'), because.lastIndexOf('because'))
console.log(because.search('because'))

let needTrim = '     30 days of JavaScript       '
console.log(needTrim.trim())

console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match('a'))

let half = '30 days of'
console.log(half.concat(' ', 'Javascript'))

console.log(challenge.repeat(2))


let a = '10'
console.log(typeof a == typeof 10)
let b = Number(a)
console.log(typeof b == typeof 10)

let c = parseFloat('9.8')
console.log(c == 10)
let d = Math.round(c)
console.log(d == 10)

console.log('python'.search('on'), 'jargon'.search('on'))

let jargon = 'I hope this course is not full of jargon.'
console.log(jargon.search('jargon'))

console.log(Math.floor(Math.random()*101))                  // btw 0-100
console.log(Math.floor(50 + Math.random()*(51)))            // btw 50-100
console.log(Math.floor(Math.random()*256))                  // btw 0-255


const firstIndex = because.indexOf('b')
const lastIndex = because.lastIndexOf('e')
console.log(because.substr(firstIndex,lastIndex - firstIndex + 1))


const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/love/gi).length)
console.log(because.match(/because/gi).length)

// how to find most frequent word
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^a-zA-Z ]/g, ""))       

const income = 'He earns 5000 euro from salary per month, 10000 euro monthly bonus, 15000 euro online courses per month.'
const arr = income.match(/\d+/g)
let newArr = []
const casting = function(string) {
    return parseInt(string)
}

arr.forEach(function(item) {
    item = casting(item)
    newArr.push(item)
})
console.log(newArr)

let monthly = 0
newArr.forEach(function(element) {   
    return monthly = monthly + element
})
console.log(monthly)