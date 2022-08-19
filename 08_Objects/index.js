const dog = {
    name: "Alex",
    color: "yellow",
    age: 5,
    bark() {
        console.log("woof woof");
    },
    getDogInfo() {
        console.log("Yellow doggy named Alex");
    },
};

dog.bark()
console.log(Object.entries(dog))
console.log(Object.keys(dog))
dog.getDogInfo()

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

console.log(Object.values(users));

//// Find the person who has most skills in the users object.

let f = 0;
let user;
for (const key in users) {
  if (users[key].skills.length > f) {
    f = users[key].skills.length;
    user = key;
    console.log(user);
  }
}

//// Count logged in users, count users having greater than equal to 50 points from the following object.

let personCount = 0
for (const key in users) {
  if (users[key].isLoggedIn == true && users[key].points >= 50){
    personCount ++
  }
}
console.log(arr.length + ' users are available')

//// Find people who are MERN stack developer from the users object

const mern = ['MongoDB', 'Express', 'React', 'Node']
for(const key in users) {
  if(mern.every( (skill) =>
    users[key].skills.includes(skill)
  ))
  console.log(key + ' is MERN user')
}

//// Set your name in the users object without modifying the original users object

const irşad = { İrşad: { email: "irş@d.com", age: 27 } };
const newUsers = Object.assign(users, irşad);
console.log(Object.keys(newUsers));
console.log(Object.keys(newUsers))
console.log(Object.values(newUsers))

const obj = {income: 3000, addIncome(param) {obj.income= obj.income+ param}}
obj.addIncome(2000)
console.log(obj.income)


let users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];
const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];

/*Create a function called signUp which allows user to add to the collection. 
If user exists, inform the user that he has already an account.*/
                                 
const signUp = function (newUser) {
    let userAlreadyExists = false   
    for (const usr of users) {                             
        if (usr._id === newUser._id) {
            userAlreadyExists = true
        }
    }

    if (userAlreadyExists) {
        return 'userAlreadyExists'
    }
    else {
        users.push(newUser)
        return 'userCreated'
    }
}
console.log(users.length)
console.log(signUp({ _id: "555555", name: "İrşad", age: 27 }))
console.log(users.length)


const signUp2 = function (newUser) {
    const arr = [];
    users.forEach(function (element) {
        arr.push(element._id);
    });
    if (arr.includes(newUser._id)) {
        console.log("user is already exist");
    } else {
        users.push(newUser);
        console.log("welcome");
    }
};
signUp2({ _id: '555555', name: 'İrşad', age: 27 })
console.log(Object.keys(users))
  


const signUp3 = function (newUser) {
    const u = users.find((user) => user._id === newUser._id);
    if (u) {
        console.log("user is already exist");
    } else {
        users.push(newUser);
        console.log("welcome");
    }
};
signUp3({ _id: '555555', name: 'İrşad', age: 27 })
console.log(Object.entries(users))

//// Create a function called signIn which allows user to sign in to the application

const signIn = function (uId) {
    const uI = users.find((user) => user._id === uId)
    if (uI) {
        if (uI.isLoggedIn === false) {
            uI.isLoggedIn = true
            console.log(uI.isLoggedIn)
            return 'Hello, long time no see'
        }
        else return 'already signed in'
    }
    else return 'user is not available'
}
console.log(signIn("eefamr"))
console.log(signIn("zwf8md"))

//// Create a function called rateProduct which rates the product

const rateProduct = function (id, pId, rate) {
    for (const product of products) {
        if (product._id == pId) {
            product.ratings.push({ userId: id, rate: rate });
            console.log("rated");
            return;
        }
    }
    console.log("doesnt exist");
};
rateProduct("eefamr", "aegfal", 3.5);
console.log(products[1])

//// Create a function called averageRating which calculate the average rating of a product

const averageRating = function (pId) {
    const a = products.find((product) => product._id === pId) 
    if(a) {
        let sum = 0
        for(const rate of a.ratings) {
            sum+= rate.rate
        }
        return sum/a.ratings.length
    }
    else return 'not exists'
}
console.log(averageRating("eedfcf"))

/* Create a function called likeProduct. This function will helps to like to the product 
if it is not liked and remove like if it was liked.*/

const likeProduct = function(uId, pId) {
    const a = products.find((product) => product._id === pId)
    if(a) {
        if(a.likes.includes(uId)) {
            a.likes.splice(a.likes.findIndex((elm) => elm === uId),1)
            console.log('</3')
            return a.likes
        }
        else {a.likes.push(uId)
            console.log('<3')
            return a.likes
        }
    }
    return 'doesnt available anymore'
}
console.log(likeProduct("eefamr", "hedfcg"))
console.log(likeProduct("eefamr", "hedfcg"))    
