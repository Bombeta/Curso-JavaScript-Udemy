// Ojbetos básicos

// let array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz';
// array = 'Outra';
// console.log(array);


// Array
// const pessoa0 = [];

// // Objeto
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);


function criaPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Silva', 45);
const pessoa3 = criaPessoa('Alexandre', 'Kamigawa', 65);
const pessoa4 = criaPessoa('Zé', 'Luiz', 19);

console.log(pessoa1.nome, pessoa2.nome);
