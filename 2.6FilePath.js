const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','subFolder','test.txt')
console.log(filePath)

//find the file in path
const base = path.basename(filePath)
console.log(base)

//find the whole path through the dirname
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)