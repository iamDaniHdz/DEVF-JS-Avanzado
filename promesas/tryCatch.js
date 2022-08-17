"use strict"
function suma(num1, num2) {
    try {
        const valorSuma = num1 + num2
        return valorSuma;
    } catch (error) {
        console.log('error: ', error);
        return 'Algo salio mal, intentelo mas tarde :('
    }
}

const respuestaSuma = suma(5,10)
console.log('respuestaSuma: ' + respuestaSuma);