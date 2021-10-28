// For in -> Lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

// const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in pessoa){
    console.log(i);
}