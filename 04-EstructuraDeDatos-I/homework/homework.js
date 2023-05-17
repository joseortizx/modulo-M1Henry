"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// n es un numero natural
// su factorial se representa como n!
// n! es * de todos los numeros menores a el Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
// tienen que ser >= 1
// tengo que hacer una funcion recursiva - basicamente funcion que se retorne a si misma. teniendo en cuenta que debo pasarle una condicion de corte
function nFactorial(n) {
  // condicion de corte
  if (n >= 1) {
    return 1;
  }
  // hacer de esta funcion una funcion recursiva. Es decir que se pase a si misma para generar el loop
  return n * nFactorial(n - 1);
}

// n es el numero de secuencias a repetir
// 0 y 1 es =  n-1  n+1     0+1=1     1+1=2    1+2=3    2+3=5   c+b=c
// 1, 1 es =
//Esto es lo que debo lograr Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// Ejemplo: nFibonacci(7) retornará 13, ya que 13
function nFibonacci(n) {
  //caso de corte
  if (n === 0) {
    console.log("termino");
    return 0;
  } else if (n === 1) {
    console.log("termino2");
    return 1;
  }
  //pasarse a si misma, la clave esta en identificar en que pingo consta el caso base
  return (n = nFibonacci(n - 1) + nFibonacci(n - 2));
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// tengo que hacer que esta function sea una kiwi
function Queue() {
  this.arr = [];
}

Queue.prototype.enqueue = function (ele) {
  return this.arr.unshift(ele);
};
Queue.prototype.dequeue = function () {
  if (this.arr === []) {
    return undefined;
  } else return this.arr.pop();
};
Queue.prototype.size = function () {
  return this.arr.length;
};

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
