// Es cuando una funcion de ordeeMayor, ejecuta la(s) funcion(es) que tiene como parametro
function ordenMayor(otraFuncion) {
    return otraFuncion()
}

const suma = (a, b) => a + b

const calculadora = (a, b, operacion) => operacion(a, b)

console.log(calculadora(9, 17, suma));

//Tienes que usar callback, para hacer las demas operaciones basicas
// resta, multiplicacion y division, usando la funcion calculadora...
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b

console.log(calculadora(9, 17, resta));
console.log(calculadora(9, 17, multiplicacion));
console.log(calculadora(9, 17, division));