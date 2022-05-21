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
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

//Чтение файла

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf-8' },
        (err, data) => {
            if (err) {
                return reject(err.message)
            }
            resolve(data)
        }))
}


//Удаление файла
// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.rm(path,
//         (err) => {
//             if (err) {
//                 return reject(err.message)
//             }
//             resolve()
//         }))
// }


// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('removed'))

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'oooooo')
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' text1'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' text2'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' text3'))
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
    .then(data => console.log(data.split(' ').length))

    .catch(err => console.log('err'))
