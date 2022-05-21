const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir1', 'dir2'), { recursive: true }) //рекурсивное создание папок



// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir1', 'dir2'), (err)) => {
//     if (err) {
//         console.log(err)
//         return;
//     } else {
//         console.log('Папка создана')
//     }
// }) //обработка ошибок

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => { //удаление папок
//     if (err) {
//         throw err
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'some text here 123 21', (err) => { //(пере)запись файла
//     if (err) {
//         throw err;
//     } else {
//         console.log('Файл записан')
//     }
// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'some text here 123 21', (err) => { //добавление в файл
//     if (err) {
//         throw err;
//     } else {
//         console.log('Добавлено в файл')
//     }
// })

//РАБОТА С ПРОМИСАМИ
//Через  fsPromise

// const fsPropmise = require('fs/promises')

// fsPropmise.mkdir('/').then().catch()


////////////////
//Без fsPromise
// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'oooooo')
//     .then(() => appendFileAsync('text1'))
//     .then(() => appendFileAsync('text2'))
//     .then(() => appendFileAsync('text3'))
//     .catch(err => console.log('err'))