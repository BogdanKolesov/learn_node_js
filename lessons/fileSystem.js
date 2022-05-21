const fs = require('fs')
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