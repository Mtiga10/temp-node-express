// //Global -NO WINDOW!!!!

// //__dirname - path to current directory
// //__filename - file name
// // require - function to use modules(commonJs)
// //module - infor about current module(file)
// //process - info about env where the programm is being executed

// console.log(__dirname)

// setInterval(()=>{
//     console.log("hello World")
// },1000)


//------------------------------------------------------------------------------------------//

// commonJs,every file is module(by defualts)
//modules - Encapsulated code (only share minimum)

const secret = 'SUPER SECRET'
const john = "john"
const peter = "peter"

const sayHi = (name)=>{
    console.log(`hello there ${name}`)
}

sayHi(john)
sayHi(peter)