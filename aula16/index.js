// Arrays

const alunos = ['Luiz', 'Maria', "João"];

// Adicionar no fim
alunos.push('Otávio');
alunos.push('Ale');

// Adicionar no começo

alunos.unshift('Bombeta');

// Remover do final

//alunos.pop();

const removido = alunos.pop();
console.log(removido);

// Remove do começo
alunos.shift();

//alunos[0] = 'Eduardo';
//alunos[3] = 'Luiza';
 
console.log(alunos.slice(0,3));