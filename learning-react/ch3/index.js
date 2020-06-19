code_01 = () => {
    var log = function(message) {
        console.log( message )
    }

    log ("In Javascript, functions are variables")
    
    // using arrow function
    log = (message) => console.log( message)
    log ("In Javascript, functions are variables")

    // function can be added to object
    const obj = {
        message: "functions can be added to objects like variables",
        log(message) {
            console.log( message)
        }
    }
    obj.log(obj.message)

    //functions can be added to array
    const messages = [
        "they can be inserted to arrays",
        message => console.log(message),
        "like variables",
        message => console.log(message)
    ]
    messages[1](messages[0])
    messages[3](messages[2])

    // functions can be sent to other functions as argument
    const insideFn = logger => 
        logger("they can be sent to other functions as asrguments")

    insideFn(message => console.log(message))

    // they can be returned from other functions, just like variables
    const createScream = function(logger) {
        return function(message) {
            logger(message.toUpperCase() + "!!!")
        }
    }

    const scream = createScream(msg => console.log(msg))
    scream("functions can be returned from other functions")

    // higher order function with scream
    const anotherCreateScream = logger => message => {
        logger(message.toUpperCase() + "!!!")
    }
}

code_02 = () => {
    const invokeIf = (condition, fnTrue, fnFalse) => 
        condition ? fnTrue() : fnFalse()

    const showWelcome = () => console.log("Welcome")
    const showUnauthorized = () => console.log("Unauthorized")

    invokeIf(true, showWelcome, showUnauthorized)
    invokeIf(false, showWelcome, showUnauthorized)
}

code_03 = () => {
    const userLogs = username => message => {
        console.log(`${username}->${message}`)
    }
    const log = userLogs('granpa')
    for (let i = 0; i < 20; i++) {
        log(i)
    }
}

code_04 = () => {
    const countDown = (value, fn) => {
        fn(value)
        return value > 0 ? countDown(value - 1, fn) : value
    }

    countDown(10, value => console.log(value))

    const asyncCountdown = (value, fn, delay=1000) =>{
        fn(value)
        return value > 0 ? 
            setTimeout(() => asyncCountdown(value - 1, fn, delay), delay) 
            : value
    }
    const log = value => console.log( value )
    asyncCountdown(10, log)
}

code_05 = () => {
    const dan = {
        type: 'person',
        data: {
            gender: 'make',
            info: {
                id: 22,
                fullName: {
                    firstName: 'Dan',
                    lastName: 'Deacon'
                }
            }
        }
    }

    const deepPick = (fields, object={}) => {
        const [first, ...remaining] = fields.split(".")
        return remaining.length
            ? deepPick(remaining.join("."), object[first])
            : object[first]
    }
    console.log( deepPick("type", dan))
    console.log( deepPick("data.info.fullName.firstName", dan))
}

code_06 = () => {
    const compose = (...fns) => arg => 
        fns.reduce((composed, f) => f(composed), arg)
    const template = "hh:mm:ss tt"
    const clockTime = template => template
                        .replace("hh", "03")
                        .replace("mm", "33")
                        .replace("ss", "33")
    const appendAMPM = template => template.replace("tt", "PM")
    const both = compose(clockTime, appendAMPM)
    console.log(both(template))
}

code_01()
code_02()
code_03()
code_04()
code_05()
code_06()
