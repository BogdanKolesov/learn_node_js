const path = require('path')

console.log(path.join(__dirname, 'first', 'second', 'third')) //склеить участки пути
const fullpath = path.resolve('first', 'second', 'third') //получить абсолютный путь
console.log(path.parse(fullpath)) // парсинг
console.log(path.sep) //разделитель в ОС
console.log(path.isAbsolute('first/second')) //поверка на абсолютный путь
console.log(path.basename(fullpath)) //название файла
console.log(path.extname(fullpath)) // расширение файла 

// --------------------------------------------------------
const siteURL = 'http://localhost:8080/users?id:5123'
const url = new URL(siteURL)
console(url)