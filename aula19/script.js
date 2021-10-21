/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol);

Referência (mutável) - array, object, function
*/

// Primitivos
let a = 'A';
let b = a; // Cópia

console.log(a,b);

a = 'Outra coisa';
console.log(a,b);

// Referência

let a = [1, 2, 3];
let b = a;

a.push(4);
console.log(a, b);
