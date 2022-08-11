// El objeto this no existe en las arrow functions
const saludo = () => {
    return "Hola Mundo"
}

console.log(saludo());

// ================================================

// Si tienes solo un argumento, le puedes quitar los parentesis
// Si mi funcion, solo retorna un valor, puedo quitar el retorn explicito y los parentesis y hacer uso del return implicito

// const saludo2 = nombre => `${(nombre === 'Pamela') ? 'Hola, Pamela' : 'No me hables, crack'}!`
const saludo2 = nombre => `Hola ${nombre}!`
console.log(saludo2("Flor"));

// ================================================
const suma = (a, b) => {
    return a + b
}

console.log(suma(4, 18));