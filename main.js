console.log(`
1.FUNCION POR DECLARACION
las funciones por declaración son una forma de definir una función en el código utilizando la palabra clave function seguida por un nombre de función y un par de paréntesis que pueden contener los argumentos de la función separados por comas.

function ejemplo(num1, num2){
    return num1+num2; 
}

2.FUNCIONES POR EXPRESION
Las funciones por expresión son otra forma de definir una función en el código utilizando una asignación en lugar de una declaración.

var resultado = function ejemplo(num1, num2){
    return num1+num2; 
}

3.FUNCIONES COMO OBJETOS
Como dato curioso, las funciones las podemos declarar por objeto. Sin embargo, este es un enfoque que no se usa a menudo en la producción.

const color = new Function("return 'Red';");
color();

4.FUNCIONES ANONIMAS 
Las funciones anónimas son funciones que no tienen un nombre definido y se utilizan generalmente como valores de otras funciones, se asignan a variables o se pasan como argumentos a otras funciones.

// Función anónima "saludo"
const saludo = function () {
  return "Hola";
};

saludo; // ƒ () { return 'Hola'; }
saludo(); // 'Hola'

5.FUNCIONES CALLBACKS
una función de devolución de llamada (callback function en inglés) es una función que se pasa como argumento a otra función y se invoca dentro de la función receptora en algún momento determinado.
Las funciones de devolución de llamada se utilizan comúnmente en la programación asíncrona de JavaScript, donde una tarea puede tardar un tiempo indeterminado en completarse y la función de devolución de llamada se utiliza para manejar el resultado una vez que la tarea ha finalizado.

function buscarUsuario(nombre, callback) {
    // Simular una búsqueda de usuario en una base de datos
    setTimeout(function() {
      var usuario = { nombre: nombre, id: 123 };
      callback(usuario);
    }, 1000);
  }
  
  // Llamar a la función de búsqueda de usuario y pasar una función de devolución de llamada
  buscarUsuario("Juan", function(usuario) {
    console.log("Usuario encontrado:", usuario);
  });

6.FUNCION AUTOEJECUTABLE
Una función autoejecutable (también conocida como función inmediatamente invocada o IIFE, por sus siglas en inglés) es una función que se declara y se ejecuta al mismo tiempo. Estas funciones son útiles para encapsular el código y evitar que las variables y las funciones definidas dentro de ellas interfieran con el código fuera de la función.
// Función autoejecutable
(function () {
  console.log("Hola!!");
})();

// Función autoejecutable con parámetros
(function (name) {
  console.log('¡Hola, $ {name}!');
})("Manz");

7.CLAUSURAS
Es una función que tiene acceso a las variables de su entorno externo, incluso después de que la función externa haya finalizado su ejecución. En otras palabras, la función interna "recuerda" el ámbito en el que se creó, y puede acceder a las variables y parámetros de la función externa, incluso cuando esa función ya no se está ejecutando.
// Clausura: Función incr()
const incr = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3

8.ARROW FUNCTIONS 
Las Arrow Functions (también conocidas como funciones flecha) son una característica de JavaScript que permite definir funciones de una manera más concisa y fácil de leer.

const func = function () {
    return "Función tradicional.";
  };
  
const func = () => {
    return "Función flecha.";
  };

9. Object.fromEntries 
Método estático agregado en ECMAScript 2019 que permite crear un objeto a partir de una lista de pares clave-valor en formato de matriz.

const entradas = [
    ['nombre', 'Juan'],
    ['apellido', 'Pérez'],
    ['edad', 30]
  ];
  
const persona = Object.fromEntries(entradas);

console.log(persona); // {nombre: "Juan", apellido: "Pérez", edad: 30}

10.FromData
Es una clase en JavaScript que proporciona una forma de crear objetos de datos de formulario y enviar datos de formulario a través de una solicitud HTTP utilizando la API fetch() o XMLHttpRequest.

La clase FormData permite construir un conjunto de pares clave-valor que representan los campos de un formulario HTML y sus valores, y luego enviarlos a un servidor para su procesamiento.

const formData = new FormData();

Una vez que se crea un objeto FormData, se pueden agregar campos de formulario y sus valores utilizando los métodos append() o set(). Por ejemplo:

const formData = new FormData();
formData.append('nombre', 'Juan');
formData.append('apellido', 'Pérez');

En este ejemplo, se crea un objeto FormData vacío y luego se agregan dos campos de formulario con los nombres "nombre" y "apellido" y los valores "Juan" y "Pérez" respectivamente.

Una vez que se han agregado los campos y valores deseados, se puede enviar el objeto FormData a través de una solicitud HTTP utilizando la API fetch() o XMLHttpRequest.
`)