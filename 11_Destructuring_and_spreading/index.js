const countriesData = require('./countries_data')

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]


let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e)

let [fin, est, sw, den, nor] = countries
console.log(est)

const rect = {...rectangle, width : 50}
console.log(rect)

///////level2

for(const {name, scores, skills, age } of users) {
    console.log(name, scores, skills, age )
}

for(const {name, skills} of users) {
    if(skills.length<2) 
    console.log(name)
}

//////level3"    

for(const {name, capital, population, languages} of countriesData) {
    console.log(name,capital,population,languages)
}

const studentD = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = studentD
console.log(name, skills, scores)

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const arr = []
const convertArrayToObject = function (array) 
{for (st of array) {
    let [name,skills,scores] = st
    arr.push({name,skills,scores})   
}
return arr}
console.log(convertArrayToObject(students))


const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const copiedS = {...student}
copiedS.skills.frontEnd.push({skill: 'Bootstrap}', level: 8 })
copiedS.skills.backEnd.push({skill: 'Express}', level: 9 })
copiedS.skills.dataBase.push({skill: 'SQL}', level: 8 })
copiedS.skills.dataScience.push('SQL')
console.log(copiedS.skills)