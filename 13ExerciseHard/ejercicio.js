/**
 * 
 * @param {Function} fn
 * @returns {Function}
 * 
 */
function memoize(fn) {
  // Usamos un mapa para guardar resultados previos
  const cache = new Map();

  return function (...args) {
    // Recorremos el árbol de argumentos uno a uno
    let current = cache;

    // Recorremos todos los parámetros de la función
    for (const arg of args) {
      if (!current.has(arg)) {
        current.set(arg, new Map());
      }
      current = current.get(arg);
    }

    // Si el resultado ya existe, lo regresamos directamente
    if (current.has("result")) {
      return current.get("result");
    }

    // Si no existe, ejecutamos la función original
    const result = fn(...args);
    current.set("result", result);
    return result;
  };
}

// Prueba 1: función simple
let callCount = 0;
const sum = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log("Prueba 1:");
console.log(sum(2, 3)); // 5
console.log(sum(2, 3)); // 5 (desde cache)
console.log(sum(1, 3)); // 4
console.log("Total de llamadas reales a la función:", callCount); // 2
console.log("------------------------------------------------");

// Prueba 2: objetos (no se consideran iguales si no son el mismo objeto)
let count2 = 0;
const mergeObjects = memoize((a, b) => {
  count2 += 1;
  return { ...a, ...b };
});

console.log("Prueba 2:");
console.log(mergeObjects({}, {})); // nuevo → llamada 1
console.log(mergeObjects({}, {})); // nuevo → llamada 2
const o = {};
console.log(mergeObjects(o, o));   // nuevo → llamada 3
console.log(mergeObjects(o, o));   // cacheado → no aumenta count
console.log("Total de llamadas reales a mergeObjects:", count2); // 3
console.log("------------------------------------------------");