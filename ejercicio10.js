// Ejercicio 10: Inversión de una Cadena
// Declara una función llamada "invertirCadena" que acepte un parámetro "cadena" y retorne la cadena invertida

// Ejemplos:
// invertirCadena("Hola Mundo") // debe retornar "odnuM aloH"
// invertirCadena("anita lava la tina") // debe retornar "anit al aval atina"

function invertirCadena(cadena) {
    // Escribe tu código aquí
        return cadena.split('').reverse().join('');

}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};

console.log(invertirCadena("Hola Mundo"));
console.log(invertirCadena("anita lava la tina"));