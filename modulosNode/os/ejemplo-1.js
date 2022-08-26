const os = new require("os") // Operative System

console.log(os);

let memoriaLibre = os.freemem()
let memoriaCompleta = os.totalmem()

console.log(memoriaLibre);
console.log(memoriaCompleta);