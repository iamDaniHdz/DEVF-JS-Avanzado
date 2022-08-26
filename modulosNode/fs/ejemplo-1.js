const fs = require("fs") //File System

// const archivos = fs.readdirSync("./arreglos/")
// console.log(archivos);

fs.readdir('./', (error, files) => {
    if (error) return error
    return console.log(files);
})