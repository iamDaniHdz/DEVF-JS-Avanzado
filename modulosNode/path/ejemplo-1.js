const path = require('path') //Route

console.log(__filename);
console.log(__dirname);

const miArchivo = path.parse(__filename) // Descomponer una ruta
console.log(miArchivo);