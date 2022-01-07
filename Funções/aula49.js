//Declaração de função (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oi');
}

// First-class objects (Objetos de primeira clase)

// Function expression
// Trata a função como um dado.

const souUmDado = function(){
    console.log('Sou um dado.');
};

souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua funcao abaixo:');
    funcao();
}

executaFuncao(souUmDado);


// Arrow function

const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando....');
    }
};

obj.falar();

