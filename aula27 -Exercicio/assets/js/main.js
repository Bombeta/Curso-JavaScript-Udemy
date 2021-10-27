const data = document.querySelector('section');

const date = new Date();

const diaMes = date.getDay();
const ano = date.getFullYear();
let mes = date.getMonth() + 1;
let dia = date.getDay();
const hora = date.getHours();
const min = date.getMinutes();
const seg = date.getSeconds();

switch(dia){
    case 0:
        dia ='Domingo';
        break;
    case 1:
        dia = 'Segunda-feira';
        break;
    case 2:
        dia = 'Terça-feira';
        break;
    case 3:
        dia = 'Quarta-feira';
        break;
    case 4:
        dia ='Quinta-feira';
        break;
    case 5:
        dia = 'Sexta-feira';
        break;
    case 6:
        dia = 'Sábado';
        break;
    default:
        dia = ' ';
        break;

}

switch(mes){
    case 1:
        mes ='janeiro';
        break;
    case 2:
        mes = 'fevereiro';
        break;
    case 3:
        mes = 'março';
        break;
    case 4:
        mes = 'abril';
        break;
    case 5:
        mes ='maio';
        break;
    case 6:
        mes = 'junho';
        break;
    case 7:
        mes = 'julho';
        break;
    case 8:
        mes ='agosto';
        break;
    case 9:
        mes = 'setembro';
        break;
    case 10:
        mes = 'outubro';
        break;
    case 11:
        mes = 'novembro';
        break;
    case 12:
        mes ='dezembro';
        break;
    default:
        mes = '';
        break;

}

console.log(`${mes}`);

const p = document.createElement('p');
p.innerHTML = `${dia}, ${diaMes} ${mes} de ${ano} ${hora}:${min}`;

data.appendChild(p);

console.log(p);

