let enrique = {
    nombre: 'Enrique'
}

let persona = {...enrique}

console.log('copia', persona);
persona.nombre = 'Luis'

console.log('copia', persona);
console.log('original', enrique);