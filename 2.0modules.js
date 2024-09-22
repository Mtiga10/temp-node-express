// // commonJs,every file is module(by defualts)
// //modules - Encapsulated code (only share minimum)

// const secret = 'SUPER SECRET'
// const john = "john"
// const peter = "peter"

// const sayHi = (name)=>{
//     console.log(`hello there ${name}`)
// }

// sayHi(john)
// sayHi(peter)

// what it looks like after distributing it in other modules 

// commonJs,every file is module(by defualts)
//modules - Encapsulated code (only share minimum)
const names = require('./2.2name')
const sayHi = require('./2.1utils')

const data = require('./2.3alternativeFlavor')

require('./2.4mindGrenade')
console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)