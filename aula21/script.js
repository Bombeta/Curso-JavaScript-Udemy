/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

/* Negação inverte a saída */
//console.log(!true);

/**
 * FALSY (qualquer coisa diferente de):
 * false
 * 0
 * "" '' ``
 * null/ undefined
 * NaN
 * Javascript avalia como true
 */

/* Avaliação de curto circuito */

/* Quando a verificação passa por um FALSY ela
encerra a comparação sem ter q verificar os outros
elementos */

console.log('Luiz' && NaN && 'Maria');

