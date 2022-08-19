const prompt = require('prompt-sync') ()
const now = new Date

console.log(typeof 'irşad')
console.log('10'==10)
console.log(parseInt('9.8')==10)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length > 'jargon'.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('dragon'.search('on')>0 || 'python'.search('on')>0)

console.log(now.getFullYear())
console.log(now.getMonth() +1)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())


let name = prompt('Enter your name')
console.log('user is ' + name)


let base = prompt('enter base')
let h = prompt('enter height')
console.log('area is ' + 0.5*base*h)

let a = prompt('side a')
let b = prompt('side b')
let c = prompt('side c')
console.log('perimeter ' + (parseInt(a)+parseInt(b)+parseInt(c)))

let x1=2, y1=2;
let x2=6, y2=10;
console.log('slope is ' + ((y2-y1)/(x2-x1)))


let hours = prompt('Enter hours')
let rate = prompt('Enter rate per hour')
console.log('weekly earn is '+ hours*rate)

let firstName = 'irşad'
let surName = 'türker'
let com = (firstName.length - surName.length)
const comp = function(com) {
    if(com<0) {
        console.log('first name is shorter than surname') 
        return
    }
    if(com===0) {
        console.log('both equal')
        return
    }
    else {
        console.log('first name is longer than surname')
    return 
    }
}
comp(com)

let myAge = 555
let yourAge = 27
console.log('am older ' + (myAge-yourAge) + ' years than you')

let birthYear = prompt('Enter your birth year')
const age = (now.getFullYear - birthYear)
const check = function(age) {
    if(age>=18) {
        console.log('safe to drive')
        return
    }
    console.log('try again later')
    return
}
check(birthYear)

let year = now.getFullYear()
let month = ('0' + (now.getMonth()+1).toString()).slice(-2)
let day = ('0' +  now.getDate().toString()).slice(-2)
let hour = ('0'+ now.getHours().toString()).slice(-2)
let minute = ('0'+ now.getMinutes().toString()).slice(-2)
console.log(day + '/' + month + '/' + year + ' ' + hour + ':' + minute)