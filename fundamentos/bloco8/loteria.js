/*Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).*/

const check = (a, b) => {
    if (a === b) {
        return 'Parabéns você ganhou'
    }
    return 'Tente novamente'
}

const loteria = (aposta) => {
    if (typeof aposta === 'number') {
        b = (Math.floor((Math.random()*5))+1)
        return check(aposta, b)
    }
    return undefined;
};

module.exports = { check, loteria };

console.log(loteria());