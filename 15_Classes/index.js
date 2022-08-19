class animal {
    constructor(name, color, legs) {
        this.name = name,
        this.color = color,
        this.legs = legs
    }
    doSomethings() {
        console.log(this.name + ' does something now')
    }
}

class dog extends animal {
    bark() {
        console.log('woof woof')
    }
}
 
const dogo = new dog ('dogo', 'black', 4)
console.log(dogo.name)
dogo.doSomethings()

class cat extends animal {
    constructor(name, color, legs, toys) {
        super(name, color, legs, toys)
        this.toys = []
    }
    breakSomething() {
        console.log('vase is broken')
    }
    get getToys() {
        return this.toys
    }
    set setToys(toy) {
        this.toys.push(toy)
    }
}

const cato = new cat('cato', 'yellow', 4)
console.log(cato.getToys)
cato.setToys = 'mouse like something'
cato.setToys = 'laser'
console.log(cato.toys)

class personAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = []
        this.expenses = []
    }
    get accountInfo() {
        return this.firstname +' ' + this.lastname
    }
    get totalIncome() {
        let sum = 0
        this.incomes.forEach(elm => 
            sum+=elm
        )
        return sum
    }
    get totalExpense() {
        let sum = 0
        this.expenses.forEach(elm => 
            sum+=elm
        )
        return sum
    }
    set addIncome(inc) {
        this.incomes.push(inc)
    }
    set addExpense(exp) {
        this.expenses.push(exp)
    }
    get accountBalance() {
        return this.totalIncome - this.totalExpense
    }
}

const irşad = new personAccount ('irşad', 'türker')
console.log(irşad.accountInfo)
irşad.addIncome =500
irşad.addIncome = 1500
console.log(irşad.totalIncome)
irşad.addExpense =300
irşad.addExpense = 550
console.log(irşad.totalExpense)
console.log(irşad.accountBalance)