// const verdadeira = true;

// // Let teme escopo de bloco {...}
// // Var só tem escopo de função;

// let nome = 'Luiz';  // criando
// var nome2 = 'Luiz';

// //var nome2 = 'Otávio'    //redeclarada

// if(verdadeira){
//     let nome = 'Otavio';    // criando
    
//     console.log(nome, nome2);

//     if(verdadeira){
//         var nome2 = 'Otávio'    //redeclarada
//         let nome = 'Outra coisa';
//         console.log(nome, nome2);
//     }
// }

// Já o escopo da função é diferente

function falaOi (){
    var sobrenome = 'Miranda';
}

console.log(sobrenome);

// Sobrenome não foi definido

falaOi();
