# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // ejecuto undefined por el error de hoisting de var
console.log(baz); // ejecuto error is not defined "la variable no esta definida"
foo(); // ejecuto Hola!
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // franco ya que al tener el mismo nombre se sobreescriben
```

```javascript
var instructor = "Tony";
console.log(instructor); // tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); // franco
  }
})();
console.log(instructor); //tony
```

```javascript
//creo entrorno global
// creo lexical enviroment ------------------  // dead zone
// var instructor = undefined                 let pm = Franco
// creo ejecution enviroment -----------------
// instructor = tony
// pm = franco
// ejecuto if ------------ creo entorno local
//                         // lexical enviroment --------------------- // dead zone
//                         // var instructor = undefined                 let pm = reverse flash
//                         // ejecution enviroment -------------------
//                         // console.log = the flash
//                         // console.log = reverse flash
// console.log the flash ya que se sobreescribe la variable
// console.log franco ya que let no sobreescribe porque tiene solo alcance local

var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // the flash
  console.log(pm); // reverse flash
}
console.log(instructor); // the flash
console.log(pm); // franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // convierte string a number por coercion y devuelve 3
"2" * "3" // convierten ambos string a number por coercion ya que el operador * no tiene ninguna otra funcion y devuelve 6
4 + 5 + "px" // suma 4 + 5 ya q ambos numeros son tipo number y luego al ser un string los concatena porque esa es la otra funcion de "+" 9px
"$" + 4 + 5 // concatena ya que es un string $4 + 5 = $45
"4" - 2 // convierte a tipo number el "4" ya que el operador - no tiene ninguna otra funcion
"4px" - 2 // como es un operador - y no tiene otra funcion lo que hace es devolver NaN ya que no encuentra otra forma que restar
7 / 0 // en js cualquier numero que se divida por 0 da como resultado infinity
{}[0] // devuelve undefined ya que estoy intentando acceder a una propiedad de un objeto que no existe
parseInt("09") // este codigo devuelve 9 ya que la funcion parseInt esta pasando el "09" a number y luego lo esta pasando a entero
5 && 2 // devuelve 2 ya que evalua 5 como truthy y luego el ultimo que evalua es el 2 y tambien da como truthy
2 && 5 // devuelve 5 ya que evalua 2 como truthy y luego el ultimo que evalua es el 5 y tambien da como resultado truthy
5 || 0 // este devuelve 5 ya que el or evalua 5 como true
0 || 5 // este devuelve 5 ya que el or evalua primero el 0 da false y el 5 da truthy
[3]+[3]-[10] // este devuelve 23 ya que toma los dos primeros y los concatena en 33 ya que son objetos y luego le resta 10 ya que es la unica funcionque posee el -
3>2>1 // devuelve false ya que evalua la primera expresion 3>2 y esto devuleve true despues al evaluar true con 1 lo que hace es convertir true a su correspondiente 1 ==== 1 es mayor que 1 entonce da false
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
// crea contexto global
// crea lexical enviroment
// f test()
//crea ejecution enviroment
// function test () ------------ crea contexto local test()
//                               // lexical enviroment
//                               // var a = undefined;
//                               // f foo()
//                               // ejecution enviroment
//                               // console.log (a) undefined;
//                               // console.log foo() 2;
//                               //

function test() {
  console.log(a); //undefined
  console.log(foo()); //2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
//crea contexto global
//lexical enviroment ------
// var snack = undefined
// f getFood(food)
//ejecution context -----
// snack = meow mix
// function getFood(false) --------------------- crea entorno local
//                                              //lexical enviroment
//                                              // if()
//                                              // ejecution enviroment
//                                              // if(false) == no hace nada ya que lo ignora a dar false
//                                              // return meow mix ya que si no encuentra una variable en local va a buscarla al global
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
// creo global
// creo lexical enviroment
// var fullname = undefined
// var obj = undefined
// var test = undefined
// creo ejecution enviroment
// fullname = juan perez;
// obj = {}
// console.log() ----------- entorno local
//                          // lexical enviroment
//                          // fullname: natalia nerea
//                          // prop {} ---------------------- entorno local
//                         //                                // lexical enviroment
//                        //                                // fullname : aurelio rosa
//                        //                               // get full name : undefined
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // aurelio rosa

var test = obj.prop.getFullname;

console.log(test()); // function o undefined undefined enralisada
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

el event loop es una mecanismo que tiene javascript para no cortar el funcionamiento del codigo. lo que hace es mandar los eventos que necesitan de un tiempo para ejecutarse a una pila de ejecucion donde se van a resolver despues de terminar todo su recorrido normal

// objeto global
// lexical enviroment
// f printing()
// ejecution enviroment
// printing() --------------------entorno local
// // lexical sin
// // ejecution enviroment
// // se resuelve log 1
// // setTime out ----------------------------------abre pila de ejecucioion que se resolvera despues
// // setTimeout1000 log 2
// // setTimeout0 log 3
// // se resuelve log 4
// // <--------------------------------- se empieza a resolver la pila
// // log 3
// // log 2

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing(); // = 1,4,3,2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
