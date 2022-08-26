// nos permite crear nuestros propios eventos
const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter()

// muy parecido a un EventListener
// definir las reglas del evento
// si el evento tal ocurre, se ejecuta este codigo
emitter.on("saludar", (args) => {
    console.log(`Hola ${args.nombre}`);
})

emitter.emit("saludar", {
    edad: 20,
    nombre: "Flor",
})