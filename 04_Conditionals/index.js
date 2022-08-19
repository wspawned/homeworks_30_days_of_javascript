const prompt = require('prompt-sync') ()

const myAge = 27
let age = prompt('Enter your age:')
if(age<myAge) {
    console.log('you are ' + (myAge-age) + 'years younger than me')
}
else if (age > myAge) {
    console.log('you are ' + (age-myAge) + 'years older than me')
}
else if (age==myAge) {
    console.log('we have same age')
}
else {
    console.log('its not even a number')
}

let a = 4, b=3
let comp = (a>b)
comp
    ?console.log(a + ' is greater than ' + b)
    :console.log(b + ' is greater than ' + a)

let num0 = prompt('Enter a number:')
if(num0%2 ==0) {
    console.log('even number')
}
else console.log('odd number')
    

let num = prompt('Enter score:')
if(num>=80 && num<=100) {
    console.log('Your grade is A')
}
else if(num>=70 && num<80) {
    console.log('Your grade is B')
}
else if(num>=60 && num<70) {
    console.log('Your grade is C')
}
else if(num>=50 && num<60) {
    console.log('Your grade is D')
}
else if(num>=0 && num<50) {
    console.log('Your grade is F')
}
else {console.log('not score')}


let month = prompt('Enter the month:')
if(month.toLowerCase() == 'september'|| month.toLowerCase() == 'october' || month.toLowerCase() == 'november' ) {
    console.log('Season is Autumn')
}
else if(month.toLowerCase() == 'december'|| month.toLowerCase() == 'january' || month.toLowerCase() == 'february' ) {
    console.log('Season is Winter')
}
else if(month.toLowerCase() == 'march'|| month.toLowerCase() == 'april' || month.toLowerCase() == 'may' ) {
    console.log('Season is Spring')
}
else if(month.toLowerCase() == 'june'|| month.toLowerCase() == 'july' || month.toLowerCase() == 'august' ) {
    console.log('Season is Summer')
}
else {console.log('u dont even know the month y do u care abt season')}


const daysInMonth = function(month) {
    return new Date (2022, month, 0).getDate()
}

let total = 0

const days = function() {
for (let i=0; i<12; i++) {
    total+= daysInMonth(i)   
}
console.log(total)
}

days()
