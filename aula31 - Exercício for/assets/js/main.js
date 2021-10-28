const container = document.querySelector('.container');
const div = document.createElement('div');
//container.appendChild(div);
// var filho = container.appendChild('div');


const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

//sectionContainer.appendChild(elementos[0,0]);
let i;
for(i=0;i<4;i++){
    let {tag, texto} = elementos[i];
    let getTag = criaElemento(tag);
    getTag.innerHTML = texto;
    div.appendChild(getTag);
    // div.innerHTML += elementos['',i];
    console.log(tag);
}

function criaElemento(tag){
    const tagAux = document.createElement(tag);
    return tagAux;
}

container.appendChild(div);