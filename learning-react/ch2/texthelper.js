const print=(message) => console.log( message, new Date())
const log=(message, timestamp) => 
    console.log( message, timestamp.toString())

module.exports = {print, log}
