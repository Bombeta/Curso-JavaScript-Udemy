const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua: 'Av. Brasil',
        numero: 320
    }
};

// console.log(pessoa.nome);

// Atribuição via desestruturação

const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);