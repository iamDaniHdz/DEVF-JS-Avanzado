function hola(nombre, unaFuncion) {
    setTimeout(() => {
        return unaFuncion(nombre)
    }, 1500);
}

hola('Samantha', nombre => {
    return console.log('Hola ' + nombre + '!');
})

function holaPePe(nombre) {
    return console.log('Hola ' + nombre + '!');
}

hola('Pepe', holaPePe)