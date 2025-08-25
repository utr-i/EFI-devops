// math.test.js
const { suma, resta, multiplicar } = require('./math.js');

console.log("Iniciando pruebas...");

console.assert(suma(2, 3) === 5, 'Prueba de suma falló: 2+3 no es 5');
console.assert(resta(5, 2) === 3, 'Prueba de resta falló: 5-2 no es 3');
console.assert(multiplicar(4, 3) === 12, 'Prueba de multiplicación falló: 4*3 no es 12');

console.log("Todas las pruebas pasaron exitosamente.");