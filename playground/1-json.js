const fs = require('fs')

// const book = {
//     title: 'Atlas Shrugged',
//     author: 'Ayn Rand'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)

data.name = 'New Guy'
data.age = 69

fs.writeFileSync('1-json.json', JSON.stringify(data, null, 2));

console.log('Data has been updated:', data);


