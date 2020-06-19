code_01 = () => {
    var pizza = true;
    pizza = false;
    console.log( pizza ); //false
}

code_02 = () => {
    // const
    const pizza = true
    try {
        pizza = false
    } catch (err) {
        console.log('error - chaging const variable')
        // console.log( err )
    }
}

code_03 = () => {
    var topic = "JavaScript"
    if (topic) {
        var topic = "React"
        console.log( "block", topic) // block React
    }
    console.log( "scope", topic)     // scope React
}

code_04 = () => {
    var topic = "JavaScript"
    if (topic) {
        let topic = "React"
        console.log( "block", topic) // block React
    }
    console.log( "scope", topic)     // scope JavaScript
}

code_05 = () => {
    var arr = []
    for (var i = 0; i < 5; i++) {
        let func = () => console.log(i)
        arr.push(func)
    }
    arr[0]() // 5 
    arr[1]() // 5
    arr[2]() // 5
    arr[3]() // 5
    arr[4]() // 5

    // using let can fix the issue
    var arr = []
    for (let i = 0; i < 5; i++) {
        let func = () => console.log(i)
        arr.push(func)
    }
    arr[0]() // 0
    arr[1]() // 1
    arr[2]() // 2
    arr[3]() // 3
    arr[4]() // 4
};

code_06 = () => {
    var world = 'world'
    var templateString = `hello ${world}`
    console.log( templateString )
}

code_07 = () => {
    // function declaration             !! hoisted
    function printLog() {
        console.log('hello world')
    }
    printLog()

    //  function expression             !! not hoisted
    const printLog2 = function() {
        console.log("another hello world")
    }
    printLog2()
}

code_08 = () => {
    hey()
    function hey() {
        console.log("hey")
    }
    
    try {
        anotherHey()
    } catch (err) {
        console.log("err - function is not defined")
    }

    const heyBrother = function() {
        console.log("you might see my brother but not me")
    }

    // passing argument
    const customHello = function (name) {
        console.log(`hello ${name}`)
    }
    customHello('javascript world')

    // function return
    const sillentHello = function(name) {
        return `hello ${name}`
    }
    console.log(sillentHello('zzZ'))

    // default parameters
    function lazyGreet(name="javascript", greeting="hello") {
        console.log( `${name} says ${greeting}`)
    }
    lazyGreet()
    lazyGreet('Java')
    lazyGreet('Java', greeting="me and Javascript are different")

    // default parameter can be anything, not just string
    const defaultPerson = {
        firstName: "Java",
        lastName: "Script"
    }
    function lazyLog(person = defaultPerson) {
        console.log(`${person.firstName} : ${person.lastName}`)
    }
    lazyLog()

    // arrow function: 'function' and 'return' might not required
    const mordernGreeting = name => `hello ${name}`
    console.log(mordernGreeting('modern world'))

    const anotherGreeting = (name, msg) => {
        return `hello ${name}, here is your msg: ${msg}`
    }
    console.log(anotherGreeting('javascript', 'you are cool'))

    // arrow function returns object
    const person = (firstName, lastName) => ({
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    })

    console.log( person("Java", "Script"))
}

code_09 = () => {
    // arrow function and scope
    /*
    const tahoe = {
        fruits: ["Organge", "Kiwi", "Lemon"],
        print: function(delay=100) {
            setTimeout(function() {
                console.log(this.fruits.join(",")) // Can not read property 'join' of undefined
            }, delay)
        }
    }
    tahoe.print()
    */

    const tahoe = {
        fruits: ["Organge", "Kiwi", "Lemon"],
        print: function(delay=100) {
            setTimeout(() => {
                console.log(this.fruits.join(","))
            }, delay)
        }
    }
    tahoe.print()
}


code_10 = () => {
    // Objects and arrays
    
    // destructuring Objects
    const person = {
        firstName: "Java",
        lastName: "Script",
        fullName: "JavaScript"
    }
    const {firstName, lastName} = person
    console.log(firstName, lastName)

    const sayHello = ({firstName, lastName}) => {
        console.log('hello', firstName, lastName, `${firstName}${lastName} should be your fullname?`)
    }
    sayHello(person)

    const anotherPerson = {
        firstName: "Bill",
        lastName: "Wilson",
        spouse: {
            firstName: "Phil",
            lastName: "Wilson",
        }
    }

    const log = ({spouse: {firstName}}) => {
        console.log(firstName, 'of Canterbury')
    }
    log(anotherPerson)

    // Destructuring Arrays
    const [firstFruit] = ["Organge", "Kiwi", "Lemon"]
    const [,,lastFruit] = ["Organge", "Kiwi", "Lemon"]
    console.log(firstFruit, lastFruit)

    // Object literal enhancement
    const obj = {firstName, lastName}
    const print = function() {
        console.log( 'my fullname is', this.firstName + ':' + this.lastName)
    }
    console.log( obj )

    const obj2 = {firstName, lastName, print}
    obj2.print()
    
    // Spread Operator
    const peaks = ['Tallac', 'Ralston', 'Rose']
    const canyons = ['Wards', 'Blackwood']
    const tahoe = [...peaks, ...canyons]
    console.log(tahoe.join(","))

    const [first, ...others] = peaks
    console.log( first ) //Tallac


    function listFruits(...args) {
        const [first, ...remaining] = args
        const [last, ...middle] = remaining.reverse()
        console.log( 'first fruit', firstFruit)
        console.log( 'last fruit', lastFruit)
        console.log( `there are ${middle.length} fruit in between`)
    }
    listFruits("Organge", "Kiwi", "Lemon")
}

code_11 = () => {
    function Person(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    Person.prototype.fullName = function() {
        console.log(this.firstName, this.lastName)
    }
    const p = new Person("Java", "Script")
    p.fullName()

    class JsPerson {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }

        fullName() {
            console.log(this.firstName, this.lastName)
        }
    }

    class Employee extends JsPerson {
        constructor(firstName, lastName, job) {
            super(firstName, lastName)
            this.job = job
        }

        fullName() {
            super.fullName()
            console.log(this.job)
        }
    }
    const employee = new Employee("Java", "Script", "developer")
    employee.fullName()
}

// works with babel only
//import { print, log } from './texthelper'
code_12 = () => {

    // common Js
    const {print, log} = require('./texthelper')
    print('hello modules')
}

code_01()
code_02()
code_03()
code_04()
code_05()
code_06()
code_07()
code_08()
code_09()
code_10()
code_11()
code_12()
