//// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2

const bmi = function(w, h) {
    const index = (w/(h*h))
    if (index>= 30) {
        console.log('obese')
    }
    else if (index<30 && index>= 25) {
        console.log('overweight')
    }
    else if (index<25 && index>= 18.5) {
        console.log('normal')
    }
    else if (index<18.5) {
        console.log('underweight')
    }
}
bmi(56,1.71)

//// Write a function findMax that takes three arguments

const max = function(num1,num2,num3) {
    const arr = [num1,num2,num3]
    let maxValue = 0;
    for(const n of arr){
if(n > maxValue) maxValue = n
    }
return maxValue
}
console.log(max(5,9,3) + ' is the max value')

//// Write a function name showDateTime

const showDateTime = function () {
    const now = new Date
    const day = ('0' + now.getDate().toString()).slice(-2)
    const month = ('0' + (now.getMonth() + 1).toString()).slice(-2)
    const year = ('0' + now.getFullYear().toString()).slice(-2)
    const hour = ('0' + now.getHours().toString()).slice(-2)
    const minute = ('0' + now.getMinutes().toString()).slice(-2)
    return (day + '/' + month + '/' + year + ' ' + hour + '.' + minute)
}
console.log(showDateTime())

//// Declare a function name swapValues. This function swaps value of x to y.

const swap = function(a,b) {
    [a,b] = [b,a]
    console.log(a,b)
}
swap(1,3)

const anotherSwap = function(a,b) {
    let temp;
    temp = a
    a = b
    b= temp
    console.log(a,b)
}
anotherSwap(1,3)

//// Write a function which takes any number of arguments and return the sum of the arguments

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(5,6,7,8,9,1,2))

//// shuffleArray, it takes an array as a parameter and it returns a shuffled array

const fruit = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']
const shuffle = function(array) {
    for(var i = array.length -1; i>0; i--) {
        var j = Math.floor(Math.random()*(i+1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array 
}
console.log(shuffle(fruit))

//// factorial, it return a factorial of the number

const factorial = function(num) {
    let f =1
    for(let i=num; i>0; i--) {
        f*= i
    }
    return f
}
console.log(factorial(5))

//// isEmpty, it takes a parameter and it checks if it is empty or not

const isEmty = function(arr) {
    if(arr.length>0 ) {
        return 'has some items'
    }
    else return 'is empty'
}
console.log(isEmty([]))

//// sum, it takes any number of arguments and it returns the sum

function sum() {
    let s = 0
    for(const elm of arguments) {
        s+=elm
    }
    return s
}
console.log(sum(1,7,5,6,4))

/*sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
Check if all the array items are number types. If not give return reasonable feedback.*/

const sumOfArrayItems = function(array) {
    let sum = 0
    for(const el of array) {
        if(typeof el == 'number') {
            sum+= el
        }
        else return 'element s not number'
        
    }
    return sum                                         
}
console.log(sumOfArrayItems([1,5,6,8,'yarasa', 10]))

//// Write a functions which checks if all items are unique in the array.

const isUnique = function(array) {
    for(const element of array) {
        if (array.indexOf(element) !== array.lastIndexOf(element)) {
          return 'there is duplicant'
        }
    }
    return 'unique'
}
console.log(isUnique([1,1,1,2,6,7]))
console.log(isUnique([1,2,23]))


const isUnique2 = function(array) { 
    const set = new Set(array)   
    if(array.length === set.size) return 'unique'
    else return 'there is duplicant'
}
console.log(isUnique2([1,1,1,2,6,7]))
console.log(isUnique2([1,2,23]))