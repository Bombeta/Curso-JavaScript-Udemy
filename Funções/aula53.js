//Closures- habilidade da função de acessar o seu escopo léxico

//Escopo Global
function retornaFuncao(){
    const nome = 'Luiz';

    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);