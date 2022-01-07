//                                   -3         -2        -1
//                 0        1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, qtdElementos, elem1, elem2);
// pop;

//console.log(nomes);

// remover o ultimo elemento
// splice(posição, quantidadeElementos)
const removidos = nomes.splice(-1, 1);

console.log(nomes, removidos);


// splice também adiciona
const add = nomes.splice(3, 0, 'Luiz');

console.log(nomes);

// ou modifica 
const modifica = nomes.splice(3, 2, 'Ze', 'Otavio');

console.log(nomes);

// pop
// const removidos = nomes.splice(-1, 1)

// shift
// const removidos = nomes.splice(0, 1)

// Push
// nomes.splice(nomes.length, 1, 'Luiz', 'Otavio', 'Miranda)

// Unshift (adiciona ao começo)
// nomes.splice(0, 0, 'Luiz', 'Otavio')